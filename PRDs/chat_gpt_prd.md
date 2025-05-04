# Product Requirements Document (PRD)

## Product: Excelsior Landing Page

**Author:** Excelsior Team  
**Last Updated:** 2025-05-02  
**Version:** 1.0

---

## Purpose

Build a modern, AI-first landing page for Excelsior to attract potential clients and partners. The landing page must communicate professionalism, innovation, and performance — emphasizing AI-powered solutions with a refined and engaging user experience.

---

## Goals

- Present Excelsior as a high-end, AI-first software company.
- Communicate clarity, elegance, and quality without overloading technical language.
- Showcase services in software engineering, AI-first apps, and scalable solutions.
- Encourage potential clients to reach out via a clear call-to-action.
- Lay the foundation for promoting future SaaS products or launching digital tools.

---

## Features & Requirements

### 1. Hero Section

- Headline: *“AI-First Software, Built for the Future”*
- Subheadline: *“We design and build high-end digital solutions using cutting-edge AI and modern technologies — fast, secure, and scalable.”*
- CTA: Prominent button or link to contact section
- Optional animated background or microinteractions (performance must remain high)

### 2. What We Build

List of key offerings, visually displayed as cards or icons:

- AI-Driven Web & Mobile Apps  
- Scalable Microservices & APIs  
- Modern Fintech Platforms  
- Custom SaaS MVPs  
- UX/UI Design with a Purpose

### 3. Our Method

**Section Title:** *“Smarter by Design”*

**Description:**  
At Excelsior, we merge artificial intelligence with human creativity to deliver software that performs, scales, and delights. Every step — from design to code to launch — is handled with care, precision, and modern tools.

### 4. Contact Section

- Contact form with fields:
  - `name` (string)
  - `email` (string)
  - `message` (string)

- Form contract:

```ts
type ContactRequest = {
  name: string
  email: string
  message: string
}
```

- Contact form does not need backend yet; logs data for now
- Clean form validation and user-friendly feedback
- Display email and phone info directly on page

---

## Tech Stack

| Area             | Tool/Library           |
|------------------|------------------------|
| Framework        | Next.js (App Router)   |
| Language         | TypeScript             |
| Styling          | TailwindCSS            |
| UI Components    | Shadcn UI, Magic UI    |
| Animations       | Framer Motion (optional) |
| Linting          | ESLint                 |
| Formatting       | Prettier               |
| Architecture     | Clean Architecture     |
| Responsiveness   | Mobile-first           |
| Version Control  | Git + GitHub           |
| Deployment       | Vercel                 |
| SEO              | Next.js Head, OG tags  |
| Validation (opt) | Zod                    |

---

## Architecture Guidelines

- Use `app` directory and App Router
- Modular folder structure:
  - `/components`
  - `/sections`
  - `/types`
  - `/app`
  - `/lib`
  - `/assets`
- Type everything with TypeScript
- Style via TailwindCSS with a global config
- Reusable, minimal, and stateless components
- Prepare for backend integrations with clear contracts
- Use environment variables for config (i.e. `NEXT_PUBLIC_*`)

---

## Milestones

| Milestone              | Description                                     | Status   |
|------------------------|-------------------------------------------------|----------|
| Project Setup          | Init Next.js, TailwindCSS, Shadcn UI, Magic UI | Pending  |
| UI/UX Design           | Implement layout and all core sections         | Pending  |
| Contact Form Integration | Contact form with mock API                  | Pending  |
| Responsive Testing     | Mobile/tablet/desktop behavior                 | Pending  |
| Deployment             | Deploy to Vercel                               | Pending  |
| QA + Polish            | Final improvements, SEO, accessibility         | Pending  |

---

## Success Criteria

- Clear, modern, visually appealing design
- Messaging communicates Excelsior’s value without jargon
- Fully responsive layout for all screen sizes
- Contact form works, with validation and ready for backend
- Lighthouse performance score ≥ 90
- Code is:
  - Typed with TypeScript
  - Organized using clean architecture principles
  - Scalable and easy to maintain