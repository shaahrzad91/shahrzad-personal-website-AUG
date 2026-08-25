# Shahrzad Amin Ranjbar — Personal Website

A responsive personal portfolio for Shahrzad Amin Ranjbar, built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Features

- Editorial responsive design for desktop, tablet, and mobile
- Professional profile portrait and original editorial AI artwork
- Animated AI-system hero artwork and voice-agent placeholder
- Career journey, experience, projects, skills, education, and certifications
- Interactive project case-study dialogs
- Downloadable CV
- Validated contact form with a server-side n8n webhook proxy
- Open Graph, X, and favicon metadata
- Reduced-motion accessibility support

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Add the private test and production webhook URLs to `.env.local`. The provided local
checkout is already configured, but `.env.local` is intentionally excluded from Git.

## Contact webhook configuration

The browser submits only to `/api/contact`; n8n URLs are read by the server from:

```text
CONTACT_WEBHOOK_ENV=test
N8N_CONTACT_WEBHOOK_TEST_URL=...
N8N_CONTACT_WEBHOOK_PRODUCTION_URL=...
```

Use `CONTACT_WEBHOOK_ENV=test` for local development and CI. Set it to `production`
in the live deployment, and add both webhook variables through your hosting provider's
server-side environment settings. Never prefix these variables with `NEXT_PUBLIC_`.

## Validate

```bash
npm run build
npm run lint
npm test
```

## Project structure

```text
app/
  api/contact/       Validated server-side n8n proxy
  components/        Portfolio sections, dialogs, shared UI, and content data
  contact-validation.ts  Shared browser/server validation rules
  globals.css        Tailwind import, design tokens, animation, and responsive CSS
  layout.tsx         Site metadata and root layout
  page.tsx           App Router home page
public/
  og.png             Social preview image
  favicon.svg        Site icon
  shahrzad-profile.png
  ai-decision-system.png
  responsible-ai-research.png
  shahrzad-amin-ranjbar-cv.pdf
tests/               Source and production-asset checks
```

## Customize

- Portfolio content lives in `app/components/portfolio-data.ts`.
- Section components live in `app/components/`.
- Colors, typography, motion, and breakpoints live in `app/globals.css`.
- Replace the editable portrait and personal-detail placeholders before publishing.
- Set `NEXT_PUBLIC_SITE_URL` to the production origin for canonical social metadata.

## Deployment

The project can be deployed to a standard Next.js host. `vercel.json` is included for Vercel deployment, and `.openai/hosting.json` retains the OpenAI Sites configuration supplied by the export.
