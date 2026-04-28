# I'M LUXURY

I'M LUXURY is a modern luxury fashion showcase website for curated bags. The project is built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion, with a small Clean Architecture structure to keep business logic, data access, and UI concerns separated.

The application is designed as a polished storefront experience: visitors can browse collections, filter and sort products, view product details, choose available variants, and contact the brand through WhatsApp.

## Main Features

- Luxury landing page with hero, featured collection, value proposition, testimonials, and private client CTA.
- Product listing page with category filter, search, and sorting.
- Product detail page with image switching by selected color.
- Static product generation for every product slug.
- WhatsApp inquiry links with prefilled product and consultation messages.
- Clean separation between domain, application, infrastructure, and presentation layers.
- Responsive design for desktop, tablet, and mobile screens.

## Tech Stack

- **Next.js 15.3.1**: React framework using the App Router.
- **React 19.1.0**: UI rendering library.
- **TypeScript 5.8.3**: Static typing with strict mode enabled.
- **Tailwind CSS 3.4.17**: Utility-first styling system.
- **Framer Motion 11.18.2**: Page and component animations.
- **Next Image**: Optimized image rendering for remote Unsplash assets and local brand assets.
- **ESLint + Next ESLint config**: Code linting for Next.js and TypeScript.

## Project Structure

```text
.
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── globals.css
├── application/
│   └── use-cases/
│       ├── get-products.ts
│       ├── get-product-by-slug.ts
│       ├── get-featured-products.ts
│       └── get-related-products.ts
├── components/
│   ├── common/
│   ├── layout/
│   ├── product/
│   └── sections/
├── domain/
│   ├── entities/
│   │   └── product.ts
│   └── repositories/
│       └── product-repository.ts
├── infrastructure/
│   ├── container.ts
│   ├── data/
│   │   └── mock-products.ts
│   └── repositories/
│       └── mock-product-repository.ts
├── presentation/
│   ├── config/
│   ├── hooks/
│   ├── utils/
│   └── view-models/
├── public/
├── src/assets/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Architecture Overview

This project follows a lightweight Clean Architecture approach.

- **Domain layer**: Contains core business entities and repository contracts. It does not depend on Next.js, React, or infrastructure code.
- **Application layer**: Contains use cases such as getting all products, getting featured products, getting product details, and selecting related products.
- **Infrastructure layer**: Contains concrete data sources and repository implementations. The current implementation uses mock product data.
- **Presentation layer**: Contains UI-facing helpers, hooks, formatting utilities, view models, and contact configuration.
- **Components and App Router**: Render the actual user interface and connect use cases to pages.

The goal is to make future changes easier. For example, if mock products are replaced with an API or database, the domain and most UI components should remain stable.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 20 or newer
- npm 10 or newer

You can check your versions with:

```bash
node --version
npm --version
```

### Installation

Install project dependencies:

```bash
npm install
```

### Run Development Server

Start the local development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

If port `3000` is already used, Next.js may offer another port in the terminal output.

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build. Run `npm run build` before using this command.

```bash
npm run lint
```

Runs Next.js lint checks.

```bash
npm run type-check
```

Runs TypeScript type checking without emitting compiled files.

## Build and Verification

Before shipping changes, run:

```bash
npm run lint
npm run type-check
npm run build
```

These commands verify code quality, TypeScript correctness, and production build compatibility.

## Product Data

Product data currently lives in:

```text
infrastructure/data/mock-products.ts
```

The data is served through:

```text
infrastructure/repositories/mock-product-repository.ts
```

UI pages do not access mock data directly. They use repository contracts and application use cases, which keeps the app easier to migrate to a real backend later.

## Image Configuration

The project uses remote images from Unsplash. Remote image access is configured in:

```text
next.config.mjs
```

If you add images from another domain, update `images.remotePatterns` in that file.

## Styling

Styling is handled with Tailwind CSS and custom luxury color tokens in:

```text
tailwind.config.ts
```

Global styles and shared utility classes are defined in:

```text
app/globals.css
```

## Contact Configuration

Brand and WhatsApp configuration lives in:

```text
presentation/config/contact.ts
presentation/utils/whatsapp.ts
```

Update these files if the brand name or WhatsApp number changes.

## Development Notes

- Prefer adding business rules to `application/use-cases` instead of placing them directly in pages or components.
- Keep domain types framework-agnostic.
- Keep infrastructure implementation details away from UI components.
- Use view models when transforming domain data for UI needs.
- Use `type` imports for TypeScript-only symbols when possible.

## Deployment

This project can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a Node.js server.

For a standard production deployment:

```bash
npm install
npm run build
npm run start
```
