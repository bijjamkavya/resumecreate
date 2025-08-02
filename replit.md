# replit.md

## Overview

This is a personal portfolio website for Lakshmi Durga Tirumani, a full-stack web developer. The application is built as a single-page React application showcasing her skills, education, experience, projects, and contact information. The site features a modern, responsive design with smooth scrolling navigation between sections including Hero, About, Education, Skills, Experience, Projects, Certificates, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Routing**: Uses Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color variables and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod validation resolvers

### Component Structure
- **Layout Components**: Navigation with smooth scrolling, Footer
- **Content Sections**: Hero, About, Education, Skills, Experience, Projects, Certificates, Contact
- **UI Components**: Comprehensive set of reusable components from Shadcn/ui including buttons, forms, cards, toasts, and navigation elements
- **Custom Hooks**: Mobile detection hook and toast notification system

### Development Environment
- **Build Tool**: Vite with React plugin and TypeScript support
- **Development Features**: Hot module replacement, runtime error overlay for Replit environment
- **Code Quality**: TypeScript strict mode with comprehensive type checking

### Backend Infrastructure (Prepared but Minimal)
- **Server**: Express.js with TypeScript configured for future API endpoints
- **Database Setup**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Storage Layer**: In-memory storage implementation with interface for future database integration
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage

### Database Schema
- **Users Table**: Basic user schema with UUID primary key, username, and password fields
- **ORM**: Drizzle ORM with Zod schema validation
- **Migration Support**: Drizzle Kit configured for database migrations

### Styling System
- **Design System**: Custom color palette with navy, emerald, blue, orange, and purple variants
- **Typography**: Inter font family from Google Fonts
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Dark Mode**: CSS custom properties setup for theme switching capability

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Routing**: Wouter for lightweight routing
- **UI Framework**: Radix UI primitives with Shadcn/ui component system
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer

### Backend Dependencies
- **Database**: Neon Database (@neondatabase/serverless) with PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation and type safety
- **Session Storage**: connect-pg-simple for PostgreSQL session management

### Development Tools
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support with strict configuration
- **Development Plugins**: Replit-specific plugins for cartographer and runtime error handling

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Class Management**: clsx and tailwind-merge for conditional styling
- **Icons**: Lucide React for consistent iconography
- **Command Interface**: cmdk for command palette functionality
- **Carousel**: Embla Carousel for image/content carousels