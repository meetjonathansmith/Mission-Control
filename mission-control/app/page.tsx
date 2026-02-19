'use client';

import { useState, useEffect } from 'react';

interface Task {
  id: string;
  title: string;
  category: 'revenue' | 'content' | 'infrastructure' | 'kingdom';
  status: 'queued' | 'thisWeek' | 'inFlight' | 'blocked' | 'done';
  description?: string;
}

const CATEGORIES = {
  revenue: { emoji: '🔴', label: 'Revenue Engine', color: 'bg-red-100 border-red-300 text-red-900' },
  content: { emoji: '🔵', label: 'Content System', color: 'bg-blue-100 border-blue-300 text-blue-900' },
  infrastructure: { emoji: '⚙️', label: 'Infrastructure', color: 'bg-gray-100 border-gray-300 text-gray-900' },
  kingdom: { emoji: '👑', label: 'Kingdom Vision', color: 'bg-yellow-100 border-yellow-300 text-yellow-900' },
};

const COLUMNS = [
  { id: 'queued', label: 'Queued', icon: '🟢' },
  { id: 'thisWeek', label: 'This Week', icon: '🟡' },
  { id: 'inFlight', label: 'In Flight', icon: '🔵' },
  { id: 'blocked', label: 'Blocked', icon: '🔴' },
  { id: 'done', label: 'Done', icon: '✅' },
];

const initialTasks: Task[] = [
  // QUEUED
  { id: '1', title: 'Make.com SC→GHL automation', category: 'revenue', status: 'queued', description: 'Clarify SC/DG definitions + deliverable scope' },
  { id: '2', title: 'Agent relationship tracker', category: 'revenue', status: 'queued', description: '5,100+ agents database structure' },
  { id: '3', title: 'KPI enhancement', category: 'revenue', status: 'queued', description: 'Daily tracking dashboard' },
  { id: '4', title: 'Reddit/forum audience research', category: 'content', status: 'queued', description: 'Requires Brave API or browser attachment' },
  { id: '5', title: '7-day content calendar', category: 'content', status: 'queued', description: 'Built from audience + framework research' },
  { id: '6', title: 'Next.js Second Brain', category: 'content', status: 'queued', description: 'Memory + transcript + strategy hub' },
  { id: '7', title: 'Brave Search API', category: 'infrastructure', status: 'queued', description: 'Enable web research + morning briefs' },
  { id: '8', title: 'Discord bot setup', category: 'infrastructure', status: 'queued', description: 'Content factory structure' },
  { id: '9', title: 'Twitter/X API', category: 'infrastructure', status: 'queued', description: 'Trending topic research (optional)' },
  { id: '10', title: 'Kingdom Investors Circle', category: 'kingdom', status: 'queued', description: 'Community structure design' },
  
  // THIS WEEK
  { id: '11', title: 'Film 3 Reels this weekend', category: 'content', status: 'thisWeek', description: 'Saturday: Why Agents Stay Broke | Sunday: Masculine Jesus + First Wholesale Deal' },
  { id: '12', title: 'API Setup Checklist (DUE: Sunday)', category: 'infrastructure', status: 'thisWeek', description: 'Brave API, Discord bot, Twitter API' },
  { id: '13', title: 'MISSION_CONTROL.md kanban', category: 'infrastructure', status: 'thisWeek', description: '✅ IN PROGRESS NOW' },
  
  // IN FLIGHT
  { id: '14', title: 'YouTube Framework Library', category: 'content', status: 'inFlight', description: '✅ DELIVERED (20 frameworks, 5 templates)' },
  { id: '15', title: '3 Weekend Reel Scripts', category: 'content', status: 'inFlight', description: '✅ READY (written Wednesday evening)' },
  { id: '16', title: 'Daily Morning Brief (6 AM)', category: 'infrastructure', status: 'inFlight', description: '⚠️ BLOCKED (needs Brave API)' },
  { id: '17', title: 'Todoist Integration', category: 'infrastructure', status: 'inFlight', description: '✅ LIVE' },
  { id: '18', title: 'ClawHub Authentication', category: 'infrastructure', status: 'inFlight', description: '✅ COMPLETE (@meetjonathansmith)' },
  { id: '19', title: 'Todoist Skill', category: 'infrastructure', status: 'inFlight', description: '✅ INSTALLED + OPERATIONAL' },
  
  // BLOCKED
  { id: '20', title: 'Discord Content Factory', category: 'content', status: 'blocked', description: 'BLOCKED: needs Discord bot setup' },
  { id: '21', title: 'Reddit Audience Research', category: 'content', status: 'blocked', description: 'BLOCKED: needs Brave API or browser' },
  { id: '22', title: 'Automated Morning Brief', category: 'content', status: 'blocked', description: 'BLOCKED: needs Brave API' },
  { id: '23', title: 'Content Factory Agents', category: 'infrastructure', status: 'blocked', description: 'BLOCKED: Discord + API dependencies' },
  
  // DONE
  { id: '24', title: 'YouTube framework analysis', category: 'content', status: 'done', description: '20 frameworks delivered (Feb 12)' },
  { id: '25', title: '3 Reel scripts for weekend', category: 'content', status: 'done', description: 'Ready to film (Feb 12)' },
  { id: '26', title: 'IG growth strategy brief', category: 'content', status: 'done', description: 'Competitor analysis + positioning (Feb 12)' },
  { id: '27', title: 'Telegram pairing', category: 'infrastructure', status: 'done', description: '@5748005892 connected (Feb 12)' },
  { id: '28', title: 'ClawHub install + auth', category: 'infrastructure', status: 'done', description: '@meetjonathansmith live (Feb 12)' },
  { id: '29', title: 'Todoist skill install', category: 'infrastructure', status: 'done', description: 'Operational (Feb 12)' },
  { id: '30', title: 'Daily brief cron (6 AM)', category: 'infrastructure', status: 'done', description: 'Scheduled (Feb 12)' },
  { id: '31', title: 'Reminder: sandcastles.ai review', category: 'infrastructure', status: 'done', description: 'Set for Feb 16, 5:20 PM (Feb 12)' },
  { id: '32', title: 'Newsletter format protocol', category: 'content', status: 'done', description: '4-6 sentence stories (Feb 12)' },
  { id: '33', title: 'CTA library', category: 'content', status: 'done', description: '8 rotating funny CTAs (Feb 12)' },
  { id: '34', title: 'First newsletter draft', category: 'content', status: 'done', description: 'Delivered 7 AM (Feb 12)' },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            MISSION CONTROL
          </h1>
          <p className="text-slate-400 text-lg">
            DOXA Operating Board • Last updated: {lastUpdated}
          </p>
        </div>

        {/* Legend */}
        <div className="mb-6 flex gap-4 flex-wrap">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <div key={key} className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-xl">{cat.emoji}</span>
              <span className="text-slate-300 text-sm font-medium">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {COLUMNS.map(column => {
            const columnTasks = getTasksByStatus(column.id);
            return (
              <div key={column.id} className="flex flex-col">
                {/* Column Header */}
                <div className="bg-slate-800 rounded-t-lg p-4 border-b-2 border-slate-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{column.icon}</span>
                      <h2 className="text-lg font-semibold text-white">
                        {column.label}
                      </h2>
                    </div>
                    <span className="text-slate-400 text-sm font-medium">
                      {columnTasks.length}
                    </span>
                  </div>
                </div>

                {/* Column Content */}
                <div className="bg-slate-800/50 rounded-b-lg p-4 space-y-3 min-h-[200px] flex-1">
                  {columnTasks.map(task => {
                    const categoryInfo = CATEGORIES[task.category];
                    return (
                      <div
                        key={task.id}
                        className={`${categoryInfo.color} p-4 rounded-lg border-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <span className="text-lg">{categoryInfo.emoji}</span>
                          <h3 className="font-semibold text-sm leading-tight flex-1">
                            {task.title}
                          </h3>
                        </div>
                        {task.description && (
                          <p className="text-xs opacity-80 ml-7">
                            {task.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Total Tasks</div>
            <div className="text-white text-3xl font-bold">{tasks.length}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">In Progress</div>
            <div className="text-blue-400 text-3xl font-bold">
              {getTasksByStatus('inFlight').length + getTasksByStatus('thisWeek').length}
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Blocked</div>
            <div className="text-red-400 text-3xl font-bold">
              {getTasksByStatus('blocked').length}
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Completed</div>
            <div className="text-green-400 text-3xl font-bold">
              {getTasksByStatus('done').length}
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Current Focus</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-300 font-semibold mb-2">Top 3 This Week:</h3>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                <li>Film 3 weekend Reels (content system activation)</li>
                <li>Complete API setup checklist by Sunday (unblock automation)</li>
                <li>AI Clone research (nano banana task from Todoist)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-400 font-semibold mb-2">⚠️ Friction Point:</h3>
              <p className="text-slate-400">
                API dependencies blocking automation stack. Fix this weekend = everything flows Monday.
              </p>
            </div>
            <div>
              <h3 className="text-green-400 font-semibold mb-2">✨ Next High-Leverage Move:</h3>
              <p className="text-slate-400">
                Install Brave API key (30 seconds) → unlocks morning briefs + content research + Reddit intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
