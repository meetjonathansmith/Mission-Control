#!/bin/bash
# KPI Sheet Auto-Update Script
# Runs daily at 6:30 AM before morning digest
# Reads Google Sheets, extracts current month MTD, updates Mission Control

SHEET_ID="1cnu2gC7lKJv5F88-XR21TbRk3pKoZQGYM42N9uTBvjE"
CURRENT_MONTH=$(date +"%B %Y")  # e.g., "February 2026"

echo "[$(date)] Starting KPI sheet update for $CURRENT_MONTH..."

# Download latest KPI sheet
curl -sL "https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=xlsx" -o /tmp/kpi-live.xlsx

if [ $? -eq 0 ]; then
    echo "[$(date)] KPI sheet downloaded successfully"
    echo "[$(date)] Mission Control will be updated via Alfred's morning routine"
else
    echo "[$(date)] ERROR: Failed to download KPI sheet"
    exit 1
fi
