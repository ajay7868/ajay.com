# Ajay Kumar Yadav — Cinematic Portfolio

Preview-first personal engineering portfolio built with Next.js, TypeScript and GSAP ScrollTrigger.

## Stack
- Next.js 15 / React 19 / TypeScript
- GSAP ScrollTrigger for the cinematic scroll sequence
- Responsive CSS with keyboard navigation and reduced-motion support
- Vercel deployment

## Local development
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run typecheck
npm run build
```

## Branch and release strategy
- `main` remains untouched until the preview has been reviewed and Ajay explicitly approves launch.
- `portfolio-preview` contains the active implementation and generates Vercel Preview deployments.
- Production promotion is a separate release step; do not promote a preview without explicit approval.

## Personal image
The supplied Ajay portrait is stored as `public/ajay-portrait.svg` (an SVG container with the original JPEG embedded) so it can be cached as a static asset rather than duplicated inside the React client bundle. No other person or generated character is used.

## Pre-launch checklist
- Confirm public contact details and resume download link with Ajay.
- Review every project description and public link for accuracy.
- Test the deployed preview on mobile, desktop, keyboard-only navigation and reduced-motion settings.
- Confirm public Vercel access and metadata previews.
- Review the final preview before production promotion.
