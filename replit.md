# Portfolio Website - Dhananjay Nerkar

## Overview

This is a modern portfolio website built for Dhananjay Nerkar, a Data Analyst and Machine Learning enthusiast. The application showcases projects, experience, and skills in an interactive, responsive format with a contact form for potential connections.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured but using in-memory storage currently)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Centralized in `shared/schema.ts` with Zod validation

## Key Components

### 1. Contact Management System
- Contact form with validation using Zod schemas
- In-memory storage implementation with interface for future database integration
- RESTful API endpoints for contact submission and retrieval
- Form validation on both client and server sides

### 2. Interactive UI Features
- **Theme System**: Light/dark mode with system preference detection
- **Interactive Background**: Canvas-based particle animation
- **Typewriter Effect**: Animated text display for role titles
- **Live Stats**: Real-time age counter and time display
- **Scroll Animations**: Intersection Observer-based animations

### 3. Portfolio Sections
- **Hero Section**: Interactive landing with live stats and social links
- **About Section**: Skills categorization with animated counters
- **Projects Section**: Filterable project showcase with technology tags
- **Experience Section**: Education and work experience timeline
- **Contact Section**: Integrated contact form with external service integration

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express server validates requests using Zod schemas
3. **Data Storage**: Currently uses in-memory storage, designed for easy database integration
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Management**: Client-side caching and synchronization via TanStack Query

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Tailwind CSS, shadcn/ui
- **Data Management**: TanStack Query, Drizzle ORM, Zod validation
- **Development Tools**: Vite, TypeScript, tsx, esbuild

### External Services
- **Form Handling**: Formspree integration for contact form submissions
- **Database**: PostgreSQL (via Neon Database serverless)
- **Fonts**: Google Fonts (Inter, Poppins)
- **Assets**: Local image storage in `attached_assets`

### Development Integrations
- **Replit**: Custom plugins for development environment
- **Hot Reload**: Vite HMR with error overlay
- **Code Analysis**: Cartographer plugin for development insights

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs tsx server with hot reload
- **Port**: 5000 (mapped to external port 80)
- **Database**: In-memory storage for development
- **Features**: Vite middleware, HMR, development error overlays

### Production Build
- **Build Command**: `npm run build` - Vite build + esbuild server bundle
- **Start Command**: `npm run start` - Runs compiled server
- **Output**: Static assets in `dist/public`, server bundle in `dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit

### Database Setup
- **Development**: Uses in-memory storage (`MemStorage` class)
- **Production**: Configured for PostgreSQL via environment variables
- **Migration**: `npm run db:push` for schema synchronization

## Changelog

- June 25, 2025: Initial setup
- June 25, 2025: Comprehensive website enhancement:
  - Added live age counter and Asia/Kolkata time display
  - Implemented complete light/dark theme system with smooth transitions
  - Enhanced interactive background with mouse interaction
  - Improved social media icon visibility and hover effects
  - Added error boundary for better error handling
  - Updated all components with consistent theme support
  - Enhanced animations and visual effects throughout
  - Created comprehensive README.md for GitHub showcase

## User Preferences

Preferred communication style: Simple, everyday language.