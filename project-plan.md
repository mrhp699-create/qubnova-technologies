# Qubnova Technologies Project Plan

## Current implementation focus

This branch consolidates the conflicted backend/API work into the current `work` branch so the project can move forward without depending on the two older conflicted pull requests.

## Completed foundation

- Vite React client with routed public pages, reusable components, Qubnova theme styling, chatbot widget, and local AI demo utilities.
- Express API scaffold with MongoDB connection setup, JWT admin authentication, protected admin routes, CRUD controllers, Mongoose models, and production deployment environment examples.
- Seed data for the default admin, services, projects, design gallery, blogs, and demo testimonials.

## Backend API scope

- `POST /api/auth/login`
- `POST /api/auth/register-admin`
- `GET /api/auth/me`
- `GET /api/projects`
- `GET /api/projects/:slug`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/designs`
- `POST /api/designs`
- `PUT /api/designs/:id`
- `DELETE /api/designs/:id`
- `GET /api/services`
- `POST /api/services`
- `PUT /api/services/:id`
- `DELETE /api/services/:id`
- `POST /api/messages`
- `GET /api/messages`
- `PUT /api/messages/:id/read`
- `DELETE /api/messages/:id`
- `GET /api/blogs`
- `GET /api/blogs/:slug`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`
- `GET /api/testimonials`
- `POST /api/testimonials`
- `PUT /api/testimonials/:id`
- `DELETE /api/testimonials/:id`

## Next product milestones

1. Connect frontend admin screens to the live API with Axios and persisted JWT auth.
2. Add form submissions from the public contact page to `POST /api/messages`.
3. Add Cloudinary-ready upload adapters while preserving URL-based fallback image fields.
4. Add automated tests for controllers, protected route middleware, and frontend user flows.
5. Replace placeholder links and demo images with final Qubnova brand assets.
