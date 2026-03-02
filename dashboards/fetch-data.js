const https = require('https');
const fs = require('fs');
const path = require('path');

const GHL_TOKEN = process.env.GHL_TOKEN;
const LOCATION_ID = process.env.GHL_LOCATION_ID;
const PIPELINE_ID = process.env.GHL_PIPELINE_ID;
const CLOSED_STAGE_ID = process.env.GHL_CLOSED_STAGE_ID;

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

function makeRequest(path) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'services.leadconnectorhq.com',
            path: path,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${GHL_TOKEN}`,
                'Version': '2021-07-28'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error(`Parse error: ${e.message}`));
                }
            });
        });

        req.on('error', reject);
        req.end();
    });
}

async function fetchAllOpportunities() {
    console.log('Fetching all opportunities...');
    const data = await makeRequest(`/opportunities/search?location_id=${LOCATION_ID}&limit=1000`);
    return data.opportunities || [];
}

async function fetchClosedDeals() {
    console.log('Fetching closed deals...');
    const data = await makeRequest(`/opportunities/search?location_id=${LOCATION_ID}&limit=1000`);
    // Filter to closed stage client-side
    const closedDeals = (data.opportunities || []).filter(opp => opp.pipelineStageId === CLOSED_STAGE_ID);
    return closedDeals;
}

async function main() {
    try {
        console.log('Starting data fetch...');
        
        // Fetch pipeline data
        const allOpportunities = await fetchAllOpportunities();
        fs.writeFileSync(
            path.join(dataDir, 'pipeline-data.json'),
            JSON.stringify({ opportunities: allOpportunities, lastUpdated: new Date().toISOString() }, null, 2)
        );
        console.log(`✅ Saved ${allOpportunities.length} opportunities to pipeline-data.json`);
        
        // Fetch closed deals
        const closedDeals = await fetchClosedDeals();
        fs.writeFileSync(
            path.join(dataDir, 'revenue-data.json'),
            JSON.stringify({ deals: closedDeals, lastUpdated: new Date().toISOString() }, null, 2)
        );
        console.log(`✅ Saved ${closedDeals.length} closed deals to revenue-data.json`);
        
        // Save SC campaign data (subset of pipeline)
        const recentOpps = allOpportunities.filter(opp => {
            const created = new Date(opp.createdAt).getTime();
            const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
            return created > thirtyDaysAgo;
        });
        fs.writeFileSync(
            path.join(dataDir, 'sc-campaign-data.json'),
            JSON.stringify({ opportunities: recentOpps, lastUpdated: new Date().toISOString() }, null, 2)
        );
        console.log(`✅ Saved ${recentOpps.length} recent opportunities to sc-campaign-data.json`);
        
        console.log('✅ All data fetched successfully!');
        
    } catch (error) {
        console.error('❌ Error fetching data:', error.message);
        process.exit(1);
    }
}

main();
