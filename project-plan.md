# Qubnova Technologies Project Plan

## Goal
Build a premium MERN monorepo for Qubnova Technologies that supports a portfolio, AI demo lab, services showcase, project gallery, design gallery, admin workflows, and future SaaS products.

## Monorepo Layout

- `client/`: Vite + React front end styled with Tailwind CSS.
- `server/`: Express + MongoDB API with authentication-ready dependencies.

## Client Stack

- Vite for local development and production builds.
- React for component-driven UI.
- Tailwind CSS for utility-first styling.
- React Router for public and admin routing.
- Framer Motion for polished page transitions and hero animations.
- Lucide React for icons.
- Axios for API requests.
- Recharts for dashboards, metrics, and case-study visualizations.

## Server Stack

- Express for REST API endpoints.
- Mongoose for MongoDB models and persistence.
- JSON Web Tokens for authentication flows.
- bcrypt for secure password hashing.
- CORS for controlled client/server communication.
- dotenv for environment-specific configuration.

## Initial Milestones

1. Establish the monorepo structure and baseline package manifests.
2. Build shared navigation, layout, and page shells for the marketing site.
3. Add service, project, design, and demo-lab data models.
4. Implement admin authentication and protected content management routes.
5. Connect client data views to API endpoints.
6. Add production deployment configuration and CI checks.

## Environment Setup

1. Copy `client/.env.example` to `client/.env` and update client-facing values.
2. Copy `server/.env.example` to `server/.env` and update database, JWT, and CORS values.
3. Install dependencies in each workspace with `npm install`.
4. Run the API from `server/` with `npm run dev`.
5. Run the web app from `client/` with `npm run dev`.
