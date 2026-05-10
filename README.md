# Qubnova Technologies

Qubnova Technologies is a premium MERN full-stack portfolio, AI demo lab, service showcase, design gallery, and future SaaS/software-house platform founded by **Moaz Saeed**. The project is designed to present the Qubnova brand, demonstrate modern web engineering, showcase services and visual work, and provide a foundation for future AI-enabled products.

## Table of contents

1. [Project overview](#project-overview)
2. [Brand overview](#brand-overview)
3. [Founder credit](#founder-credit)
4. [Features](#features)
5. [Tech stack](#tech-stack)
6. [Folder structure](#folder-structure)
7. [Frontend installation](#frontend-installation)
8. [Backend installation](#backend-installation)
9. [Client environment variables](#client-environment-variables)
10. [Server environment variables](#server-environment-variables)
11. [Run the frontend](#run-the-frontend)
12. [Run the backend](#run-the-backend)
13. [Seed MongoDB](#seed-mongodb)
14. [Default admin login](#default-admin-login)
15. [Vercel deployment guide](#vercel-deployment-guide)
16. [Render deployment guide](#render-deployment-guide)
17. [MongoDB Atlas setup](#mongodb-atlas-setup)
18. [AI demo mode](#ai-demo-mode)
19. [Future AI provider integration notes](#future-ai-provider-integration-notes)
20. [Future improvements](#future-improvements)

## Project overview

This repository is intended to power the public digital presence for Qubnova Technologies. It can be used as:

- A company landing page for services, portfolio items, case studies, and contact requests.
- A MERN application starter with separate frontend and backend workspaces.
- A lightweight admin-ready foundation for managing website content.
- An AI demo environment where visitors can experience simulated AI workflows before real provider integrations are added.
- A future product base for SaaS tools, client dashboards, automation products, and software-house operations.

The application is structured around a modern frontend, an API backend, MongoDB persistence, environment-based configuration, and deployment targets such as Vercel, Render, and MongoDB Atlas.

## Brand overview

**Qubnova Technologies** represents a modern, premium, and innovation-focused technology brand. The name combines a sense of structure and intelligence with forward movement and discovery.

Brand characteristics:

- **Premium:** polished interfaces, refined user experience, and professional presentation.
- **Modern:** built with current full-stack JavaScript practices and cloud deployment workflows.
- **AI-aware:** prepared for AI demos, intelligent automation, and future provider-backed features.
- **Scalable:** suitable for expanding from a portfolio website into SaaS, dashboards, and client systems.
- **Trust-focused:** clear messaging, service transparency, secure configuration, and maintainable architecture.

Recommended brand tone:

- Confident, concise, and professional.
- Technical enough to show capability, but approachable for non-technical clients.
- Future-facing without overpromising production AI capabilities before provider integrations are connected.

## Founder credit

Qubnova Technologies was founded by **Moaz Saeed**.

Suggested public credit line:

> Founded by Moaz Saeed, Qubnova Technologies builds premium digital experiences, AI-ready products, and scalable software solutions for modern businesses.

## Features

Planned and/or supported application features include:

- Responsive company website for Qubnova Technologies.
- Service showcase for web development, UI/UX, AI-ready applications, automation, SaaS, and software consulting.
- Portfolio and design gallery sections.
- Contact and inquiry flows.
- Admin-ready backend architecture.
- MongoDB-backed data models for dynamic content.
- Seed script support for local or cloud database setup.
- AI demo mode for simulated assistant or workflow experiences.
- Gemini-powered Nova voice chatbot with browser speech input and spoken replies.
- Environment-specific configuration for local development and production deployments.
- Vercel-ready frontend deployment.
- Render-ready backend deployment.
- MongoDB Atlas-compatible database configuration.
- Future-ready integration points for real AI providers.

## Tech stack

The intended stack is a MERN-style architecture:

### Frontend

- React
- Vite
- JavaScript or TypeScript, depending on implementation
- CSS, Tailwind CSS, or component-level styling
- React Router for client-side routing, if routing is used
- Axios or Fetch for API requests

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens for admin authentication, if auth is enabled
- bcrypt or bcryptjs for password hashing, if auth is enabled
- dotenv for environment configuration
- CORS middleware for frontend/backend communication

### Deployment and infrastructure

- Vercel for frontend hosting
- Render for backend hosting
- MongoDB Atlas for managed MongoDB
- GitHub for source control and deployment integration

## Folder structure

A typical project structure for this repository is shown below. Some folders may be added as implementation grows.

```text
qubnova-technologies/
├── README.md
├── LICENSE
├── .gitignore
├── client/
│   ├── .env.example
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── routes/
│       ├── services/
│       ├── styles/
│       ├── App.jsx
│       └── main.jsx
└── server/
    ├── .env.example
    ├── package.json
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── seed/
    │   ├── utils/
    │   └── index.js
    └── scripts/
```

Recommended responsibilities:

- `client/`: all frontend UI, routes, assets, and API client code.
- `server/`: Express API, database connection, models, routes, authentication, seed scripts, and backend utilities.
- `client/.env.example`: documented frontend environment variables.
- `server/.env.example`: documented backend environment variables.

## Frontend installation

From the repository root:

```bash
cd client
npm install
```

If the project uses a different package manager, use the matching command:

```bash
pnpm install
# or
yarn install
```

After installation, create a local frontend environment file:

```bash
cp .env.example .env
```

Then update `.env` with values appropriate for local development.

## Backend installation

From the repository root:

```bash
cd server
npm install
```

If the project uses a different package manager, use the matching command:

```bash
pnpm install
# or
yarn install
```

After installation, create a local backend environment file:

```bash
cp .env.example .env
```

Then update `.env` with your MongoDB connection string, JWT secret, CORS settings, and admin seed credentials.

## Client environment variables

Create `client/.env.example` with the variables below, then copy it to `client/.env` for local development.

```env
# Frontend app identity
VITE_APP_NAME=Qubnova Technologies
VITE_APP_URL=http://localhost:5173

# Backend API URL
VITE_API_BASE_URL=http://localhost:5000/api

# AI demo configuration
VITE_AI_DEMO_MODE=true
VITE_AI_DEMO_LABEL=Qubnova AI Demo

# Public contact and brand links
VITE_PUBLIC_CONTACT_EMAIL=hello@qubnova.com
VITE_PUBLIC_FOUNDER_NAME=Moaz Saeed
VITE_PUBLIC_BRAND_NAME=Qubnova Technologies
```

Variable notes:

- `VITE_APP_NAME`: display name used by the frontend.
- `VITE_APP_URL`: public frontend URL for local or production use.
- `VITE_API_BASE_URL`: URL of the backend API.
- `VITE_AI_DEMO_MODE`: keeps AI features in simulated/demo mode when set to `true`.
- `VITE_AI_DEMO_LABEL`: label displayed for demo AI experiences.
- `VITE_PUBLIC_CONTACT_EMAIL`: public contact email shown in the UI.
- `VITE_PUBLIC_FOUNDER_NAME`: founder name for public credit.
- `VITE_PUBLIC_BRAND_NAME`: brand name for reusable UI content.

> Vite only exposes variables prefixed with `VITE_` to frontend code. Do not place private secrets in `client/.env`.

## Server environment variables

Create `server/.env.example` with the variables below, then copy it to `server/.env` for local development.

```env
# Server configuration
NODE_ENV=development
PORT=5000
API_BASE_PATH=/api

# Database
MONGO_URI=mongodb://127.0.0.1:27017/qubnova-technologies

# Security and auth
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10

# CORS
CLIENT_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173

# Default admin seed account
ADMIN_NAME=Qubnova Admin
ADMIN_EMAIL=admin@qubnova.com
ADMIN_PASSWORD=ChangeMe123!
ADMIN_SETUP_KEY=optional-register-admin-key

# AI / Gemini voice chatbot
AI_DEMO_MODE=false
AI_PROVIDER=gemini
GEMINI_API_KEY=paste-your-gemini-api-key-here
GEMINI_MODEL=gemini-2.5-flash

# Brand metadata
BRAND_NAME=Qubnova Technologies
FOUNDER_NAME=Moaz Saeed
CONTACT_EMAIL=hello@qubnova.com
```

Variable notes:

- `NODE_ENV`: runtime environment such as `development`, `test`, or `production`.
- `PORT`: local or hosted port for the Express server.
- `API_BASE_PATH`: base route prefix for API endpoints.
- `MONGO_URI`: MongoDB connection string for local MongoDB or MongoDB Atlas.
- `JWT_SECRET`: private secret used to sign authentication tokens.
- `JWT_EXPIRES_IN`: token lifetime.
- `BCRYPT_SALT_ROUNDS`: password hashing cost factor.
- `CLIENT_URL`: primary frontend URL allowed to access the API.
- `ALLOWED_ORIGINS`: comma-separated list of allowed frontend origins.
- `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`: default admin values used by database seeding.
- `ADMIN_SETUP_KEY`: optional key required by `POST /api/auth/register-admin` when set.
- `AI_DEMO_MODE`: legacy flag for simulated AI behavior; keep `false` when using Gemini.
- `AI_PROVIDER`: identifies the active provider; use `gemini` for the Nova voice chatbot.
- `GEMINI_API_KEY`: private Gemini API key used only by the Express backend. Paste your key in `server/.env`, never in `client/.env`.
- `GEMINI_MODEL`: Gemini model used by the chatbot. The default route fallback is `gemini-2.5-flash`.
- `BRAND_NAME`, `FOUNDER_NAME`, `CONTACT_EMAIL`: reusable brand metadata.

> Never commit real `.env` files or production secrets. Commit only `.env.example` files with safe placeholder values.

## Gemini voice chatbot setup

The floating Nova Assistant can now talk to visitors using a real Gemini API key. The browser handles speech-to-text and text-to-speech, while the backend securely calls Gemini so the API key is never exposed in frontend code.

Local setup:

```bash
cd server
cp .env.example .env
```

Then open `server/.env` and replace this placeholder:

```env
GEMINI_API_KEY=paste-your-gemini-api-key-here
GEMINI_MODEL=gemini-2.5-flash
```

Run both apps:

```bash
cd server
npm run dev
```

```bash
cd client
npm run dev
```

Open `http://localhost:5173`, click the floating Nova bot, and use **Talk to Nova**. Voice input works best in Chrome because it depends on the browser `SpeechRecognition` API.

If the browser console shows `POST http://localhost:5000/api/chat net::ERR_CONNECTION_REFUSED`, the frontend is running but the backend is not reachable. Start the Express server with `cd server && npm run dev`, confirm `http://localhost:5000/api/health` returns `ok`, and keep `VITE_API_BASE_URL=http://localhost:5000/api` in `client/.env`. Nova now falls back to a built-in Qubnova helper reply when the live AI server or Gemini key is unavailable, so visitors still get a human-friendly response instead of a dead error message.

## Run the frontend

Start the frontend development server:

```bash
cd client
npm run dev
```

Expected local URL:

```text
http://localhost:5173
```

If the frontend uses the backend API, confirm `VITE_API_BASE_URL` points to the running backend, for example:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Run the backend

Start the backend development server:

```bash
cd server
npm run dev
```

If no development script is available, use the project start script:

```bash
npm start
```

Expected local API URL:

```text
http://localhost:5000/api
```

Recommended health endpoint, if implemented:

```text
GET http://localhost:5000/api/health
```

## Seed MongoDB

Before seeding, make sure MongoDB is running locally or that `MONGO_URI` points to a valid MongoDB Atlas cluster.

Typical seed workflow:

```bash
cd server
cp .env.example .env
npm install
npm run seed
```

If the project stores seed scripts under `src/seed` or `scripts`, the script in `server/package.json` should point to the seed entry file, for example:

```json
{
  "scripts": {
    "seed": "node src/seed/index.js"
  }
}
```

A seed command should generally create:

- Default admin user.
- Starter brand settings.
- Example services.
- Example portfolio or gallery items.
- Demo AI content, if needed.

For safe production usage:

- Change the default admin password immediately after first login.
- Do not re-run destructive seed scripts against production unless the script is explicitly designed to be idempotent.
- Back up important production data before running any database operation.

## Default admin login

The default admin account is created when you run `npm run seed` from the `server` folder. The seed script reads `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `server/.env`; if they are not set, it uses:

```text
Email: admin@qubnova.com
Password: ChangeMe123!
```

Local login checklist:

1. Start MongoDB or point `MONGO_URI` at MongoDB Atlas.
2. Run `cd server && cp .env.example .env && npm install && npm run seed`.
3. Start the API with `npm run dev`; the local API should be `http://localhost:5000/api`.
4. Start the frontend from `client` with `npm run dev`.
5. Open `http://localhost:5173/admin/login` and enter the seeded email and password.

Important security steps:

1. Use the default login only for local development or first-time setup.
2. Override `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `server/.env` before seeding a shared environment.
3. Change the admin password immediately after first production login.
4. Never expose admin credentials in frontend code.

## Vercel deployment guide

Use Vercel for the frontend application in `client/`.

### 1. Prepare the frontend

Confirm the frontend builds locally:

```bash
cd client
npm install
npm run build
```

### 2. Create the Vercel project

1. Push the repository to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Set the project root directory to `client`.
5. Use the framework preset for Vite or React, depending on what Vercel detects.

### 3. Configure build settings

Typical Vite settings:

```text
Root Directory: client
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

### 4. Add Vercel environment variables

Add production-safe values in Vercel project settings:

```env
VITE_APP_NAME=Qubnova Technologies
VITE_APP_URL=https://your-vercel-domain.vercel.app
VITE_API_BASE_URL=https://your-render-api.onrender.com/api
VITE_AI_DEMO_MODE=true
VITE_AI_DEMO_LABEL=Qubnova AI Demo
VITE_PUBLIC_CONTACT_EMAIL=hello@qubnova.com
VITE_PUBLIC_FOUNDER_NAME=Moaz Saeed
VITE_PUBLIC_BRAND_NAME=Qubnova Technologies
```

### 5. Deploy

Trigger a deployment from the Vercel dashboard or by pushing to the connected branch.

After deployment, test:

- Homepage loads correctly.
- Navigation and responsive layout work.
- API requests target the Render backend.
- Contact forms or dynamic pages handle errors gracefully.

## Render deployment guide

Use Render for the backend application in `server/`.

### 1. Prepare the backend

Confirm the backend can start locally:

```bash
cd server
npm install
npm run dev
```

Confirm the production start script exists in `server/package.json`, for example:

```json
{
  "scripts": {
    "start": "node src/index.js"
  }
}
```

### 2. Create a Render web service

1. Push the repository to GitHub.
2. Open Render and choose **New Web Service**.
3. Connect the GitHub repository.
4. Set the root directory to `server`.
5. Choose the Node runtime.

### 3. Configure Render commands

Typical settings:

```text
Root Directory: server
Build Command: npm install
Start Command: npm start
```

### 4. Add Render environment variables

Add values in Render service settings:

```env
NODE_ENV=production
PORT=10000
API_BASE_PATH=/api
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/qubnova-technologies?retryWrites=true&w=majority
JWT_SECRET=<long-random-production-secret>
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
CLIENT_URL=https://your-vercel-domain.vercel.app
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app
ADMIN_NAME=Qubnova Admin
ADMIN_EMAIL=<secure-admin-email>
ADMIN_PASSWORD=<secure-admin-password>
AI_DEMO_MODE=true
AI_PROVIDER=demo
AI_API_KEY=
AI_MODEL=
BRAND_NAME=Qubnova Technologies
FOUNDER_NAME=Moaz Saeed
CONTACT_EMAIL=hello@qubnova.com
```

Render provides the runtime port through `PORT`. Your server should listen on `process.env.PORT`.

### 5. Deploy and verify

After deployment, verify:

```text
https://your-render-api.onrender.com/api/health
```

Then update the frontend `VITE_API_BASE_URL` in Vercel to point to the Render API URL.

## MongoDB Atlas setup

Use MongoDB Atlas for production or shared cloud development databases.

### 1. Create a cluster

1. Sign in to MongoDB Atlas.
2. Create a new project for Qubnova Technologies.
3. Create a free or production-ready cluster.
4. Choose the cloud provider and region closest to the majority of users or the backend host.

### 2. Create a database user

1. Go to **Database Access**.
2. Add a new database user.
3. Use a strong password.
4. Grant only the permissions required by the app.

### 3. Configure network access

1. Go to **Network Access**.
2. Add the IP addresses that should connect to the database.
3. For Render deployments, use Render's documented outbound IP behavior or a secure allowlist strategy.
4. For quick testing only, `0.0.0.0/0` allows access from anywhere, but it is less secure.

### 4. Get the connection string

1. Open the cluster connection modal.
2. Choose the driver connection option.
3. Copy the MongoDB connection string.
4. Replace `<username>`, `<password>`, and database name placeholders.

Example:

```env
MONGO_URI=mongodb+srv://qubnova_user:strong-password@cluster0.example.mongodb.net/qubnova-technologies?retryWrites=true&w=majority
```

### 5. Use the URI in the backend

Add the Atlas URI to `server/.env` locally and to Render environment variables in production.

After connecting, seed the database if needed:

```bash
cd server
npm run seed
```

## AI demo mode

AI demo mode is a safe placeholder mode for showcasing AI concepts without calling a real AI provider.

When demo mode is enabled:

- The frontend can display AI-themed interfaces, prompts, sample chat flows, generated-looking responses, or workflow previews.
- The backend can return deterministic mock responses instead of contacting an external AI API.
- No provider key is required.
- Costs are avoided during demos and early development.
- The product can demonstrate direction and user experience before production AI behavior is finalized.

Recommended demo-mode flags:

```env
# client
VITE_AI_DEMO_MODE=true

# server
AI_DEMO_MODE=true
AI_PROVIDER=demo
AI_API_KEY=
AI_MODEL=
```

Production guidance:

- Clearly label simulated AI responses as demos if users could confuse them with real AI-generated output.
- Do not claim real model capabilities until an actual provider is integrated.
- Keep demo responses appropriate, safe, and aligned with the Qubnova Technologies brand.

## Future AI provider integration notes

The project can later integrate a real AI provider by adding a provider service layer to the backend.

Recommended approach:

1. Keep AI calls on the backend only. Do not expose provider API keys to the frontend.
2. Create a dedicated AI service module, for example `server/src/services/aiService.js`.
3. Route all AI features through backend endpoints such as `POST /api/ai/chat` or `POST /api/ai/generate`.
4. Use environment variables to switch providers and models.
5. Add request validation, rate limiting, and authentication for expensive AI endpoints.
6. Log metadata needed for debugging, but avoid storing sensitive user prompts unless explicitly required and disclosed.
7. Add graceful fallback behavior when the provider is unavailable.
8. Keep `AI_DEMO_MODE=true` available for demos, development, and provider outage fallback.

Possible future environment variables:

```env
AI_DEMO_MODE=false
AI_PROVIDER=openai
AI_API_KEY=<provider-api-key>
AI_MODEL=<provider-model-name>
AI_REQUEST_TIMEOUT_MS=30000
AI_MAX_OUTPUT_TOKENS=800
AI_TEMPERATURE=0.7
```

Possible integration areas:

- AI website assistant for service discovery.
- Proposal or project brief generator.
- Portfolio case study summarizer.
- Admin content drafting assistant.
- Customer support automation.
- SaaS workflow copilots.

## Future improvements

Recommended next improvements include:

- Build the complete React frontend for the Qubnova Technologies landing page.
- Add reusable UI components and a polished design system.
- Implement backend API routes for services, projects, contact messages, testimonials, and gallery items.
- Add admin authentication and protected dashboard pages.
- Add CRUD management for portfolio content and service pages.
- Add validation and spam protection for contact forms.
- Add email notifications for inquiries.
- Add upload support for portfolio images and design gallery assets.
- Add analytics and conversion tracking.
- Add automated tests for frontend components and backend APIs.
- Add CI checks for linting, formatting, tests, and builds.
- Add production logging and error monitoring.
- Add role-based admin permissions.
- Add real AI provider integration behind the backend API.
- Add rate limiting for authentication, contact, and AI endpoints.
- Add internationalization if Qubnova Technologies targets multiple regions.
- Add SEO metadata, Open Graph images, sitemap generation, and robots configuration.
- Add accessibility reviews for keyboard navigation, contrast, semantic HTML, and screen-reader support.

## License

See [LICENSE](./LICENSE) for licensing information.

## Implemented Express API foundation

This repository now includes a root-level Express backend in `server/` rather than a nested `server/src/` layout. The implemented backend contains:

- `server/server.js` for Express app setup, CORS, JSON parsing, health checks, and route mounting.
- `server/config/db.js` for MongoDB/Mongoose connection setup.
- `server/models/` for User, Project, Design, Service, Message, Blog, and Testimonial schemas.
- `server/controllers/` for auth, projects, designs, services, messages, blogs, and testimonials.
- `server/routes/` for the required REST API endpoints.
- `server/middleware/` for JWT protection, admin authorization, 404 handling, and API errors.
- `server/seed/seed.js` for professional Qubnova demo content and the default admin account.

### Backend scripts

From `server/`:

```bash
npm run dev
npm start
npm run seed
```

### Backend API routes

Public routes:

- `GET /api/health`
- `POST /api/auth/login`
- `POST /api/auth/register-admin`
- `GET /api/projects`
- `GET /api/projects/:slug`
- `GET /api/designs`
- `GET /api/services`
- `POST /api/messages`
- `GET /api/blogs`
- `GET /api/blogs/:slug`
- `GET /api/testimonials`

Admin-protected routes require `Authorization: Bearer <token>`:

- `GET /api/auth/me`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `POST /api/designs`
- `PUT /api/designs/:id`
- `DELETE /api/designs/:id`
- `POST /api/services`
- `PUT /api/services/:id`
- `DELETE /api/services/:id`
- `GET /api/messages`
- `PUT /api/messages/:id/read`
- `DELETE /api/messages/:id`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`
- `POST /api/testimonials`
- `PUT /api/testimonials/:id`
- `DELETE /api/testimonials/:id`

### Pull request conflict resolution note

If older pull requests that attempted to add the monorepo scaffold or backend API show GitHub conflicts, prefer merging the newest consolidation branch created from the current `work` branch. This branch already includes the client foundation, AI demo utilities, README updates, seed script, and the backend API files, so the older conflicted pull requests can be closed after the consolidated branch is reviewed.
