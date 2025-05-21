# Room Makeover Visualizer

A full-stack application that allows users to upload images of their rooms and preview design transformations using AI.

## Features

Upload room photos
Visualize changes (wall color, decor, layout)
Save and manage projects
Basic authentication (optional)

## Tech Stack

Frontend: React, React Router, Axios
Backend: Express.js, PostgreSQL
APIs: HomeDesignsAI, Decor8 AI
Deployment: Vercel (frontend), Render (backend)

## Setup Instructions

### 1. Backend

```bash
cd server
npm install
cp .env.example .env # Add DATABASE_URL
psql < seed.sql      # Seed the database
npm start
