# Spa Kenylson - Replit Project Guide

## Overview

This is a full-stack web application for "Spa Kenylson," a spa business in Angola that offers traditional African wellness treatments. The application is built as a single-page application (SPA) with a React frontend and Express backend, featuring Angola-inspired design elements and spa services showcase.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom Angola-inspired color palette
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite integration

### Database Schema
- Simple user management system with username/password authentication
- Schema defined in `/shared/schema.ts` using Drizzle ORM
- Currently includes `users` table with id, username, and password fields
- Uses Zod for schema validation and type inference

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Full-screen landing with parallax effects
3. **Services Section**: Grid layout showcasing spa treatments with Angola-inspired descriptions
4. **Virtual Tour**: 360° panoramic views of spa facilities using Pannellum
5. **About Section**: Cultural storytelling with animated scroll effects
6. **Contact Section**: Booking form with WhatsApp integration
7. **WhatsApp Float**: Floating contact button for immediate communication

### Backend Structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Routes**: Minimal REST API structure (currently placeholder)
- **Middleware**: Request logging and error handling
- **Development Server**: Vite integration for hot reloading

### Styling System
- Custom CSS variables for Angola-inspired color palette
- Responsive design with mobile-first approach
- Cultural design elements through custom CSS classes
- Dark/light mode support through CSS custom properties

## Data Flow

1. **Client-side routing** handles navigation between sections
2. **Scroll animations** trigger content visibility based on viewport intersection
3. **Form submissions** integrate with WhatsApp for immediate customer contact
4. **Virtual tour** uses Pannellum library for 360° image viewing
5. **State management** through React Query for any future API integration

## External Dependencies

### Frontend Libraries
- **React ecosystem**: React, React DOM, React Query
- **UI Components**: Radix UI primitives, Shadcn/ui components
- **Animations**: Framer Motion, custom CSS animations
- **Forms**: React Hook Form with Zod validation
- **Virtual Tour**: Pannellum for 360° panoramic views
- **Icons**: Lucide React, Font Awesome
- **Utilities**: Class variance authority, clsx, date-fns

### Backend Libraries
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database client
- **Session**: Connect-pg-simple for PostgreSQL sessions
- **Development**: TSX for TypeScript execution, Vite plugins

### Build Tools
- **Vite**: Frontend build tool with React plugin
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **ESBuild**: Server-side bundling for production

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit's cloud development environment
- **Hot Reloading**: Vite dev server with Express backend proxy
- **Database**: PostgreSQL module available in Replit environment
- **Port Configuration**: Server runs on port 5000 with external port 80

### Production Deployment
- **Build Process**: Vite builds client, ESBuild bundles server
- **Static Assets**: Client builds to `dist/public` directory
- **Server Bundle**: Express server bundled to `dist/index.js`
- **Database**: Production PostgreSQL connection via DATABASE_URL
- **CDN Ready**: Netlify configuration included for static deployment

### Alternative Deployment Options
- **Netlify**: Static site with serverless functions (configured)
- **Vercel**: Full-stack deployment support
- **Railway/Render**: Container-based deployment for Express server

## Changelog

```
Changelog:
- June 18, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```