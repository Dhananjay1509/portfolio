# Dhananjay Nerkar Portfolio

A modern, fullstack portfolio website built with React (Vite) for the frontend and Node.js/Express for the backend. This monorepo is structured for easy deployment on Render.com.

## Features
- **Frontend:**
  - Built with React and Vite
  - Responsive, dark-themed UI
  - Animated backgrounds and interactive sections
  - Live stats (age, time, etc.)
  - Project showcase, about, contact, and more
- **Backend:**
  - Node.js/Express API (for future dynamic features)
  - Ready for integration with databases or external APIs

## Project Structure
```
portfolio-main/
  client/   # Frontend (React/Vite)
  server/   # Backend (Node/Express)
  README.md
  .gitignore
```

## Deployment (Render.com)

### Frontend (Static Site)
1. Go to [Render.com](https://render.com/) and create a new **Static Site**.
2. Connect your GitHub repo and set the root directory to `client/`.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`

### Backend (Web Service)
1. On Render, create a new **Web Service**.
2. Set the root directory to `server/`.
3. Build command: `npm install && npm run build` (if using TypeScript)
4. Start command: `npm start`
5. Set any required environment variables in the Render dashboard.

## Development

### Frontend
```sh
cd client
npm install
npm run dev
```

### Backend
```sh
cd server
npm install
npm start
```

## License
MIT