<a href="https://catireton.github.io/portfolio/"><img src="./public/images/readme.png" alt="Cat Ireton portfolio" width="100%"></a>
<hr>
<div align="center">
  <img src="https://img.shields.io/badge/Astro-6.x-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</div>

## Live site

**[catireton.github.io/portfolio](https://catireton.github.io/portfolio/)**

## Project structure

```
public/
├── icons/
└── images/
src/
├── assets/icons/   # SVG icon components
├── components/     # Astro UI components
├── layouts/        # Page layout wrapper
├── pages/          # index.astro entry point
├── styles/         # global.css (Tailwind import)
└── utils/          # Shared utilities (date, etc.)
tests/
├── e2e/            # Playwright end-to-end tests
└── unit/           # Vitest unit tests
```

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321/portfolio)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Testing

```bash
# Unit tests (Vitest)
npm test

# Unit tests in watch mode
npm run test:watch

# End-to-end tests (Playwright — starts dev server automatically)
npm run test:e2e

# Playwright with interactive UI
npm run test:e2e:ui

# TypeScript / Astro type checking
npm run typecheck
```

## Deployment

Deployed automatically to **GitHub Pages** on every push to `main` via the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The CI pipeline runs `typecheck` and unit tests before the build step — a failed test blocks the deploy.

## Future development

- **Analytics** — Add [Plausible](https://plausible.io) or Vercel Analytics to track portfolio visitors and referral sources
- **More projects** — Add additional projects as they are completed
- **OG image** — Replace `readme.png` with a custom-designed Open Graph image sized 1200×630 for better social sharing previews
- **Testimonials section** — Add the LinkedIn recommendation from Matt Cook and any others
- **Dark/light mode toggle** — Theme switcher persisted to `localStorage`
- **Responsive polish** — Remove the `min-w-[535px]` floor and fully test on mobile viewports
- **Finance of America** — Add current role to Experience section once details are ready to share publicly
