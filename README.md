# Synergyscape Web

Standalone production repository for `synergyscape.io` (parent company site for Skeldir).

## Local development

1. Install dependencies:
   `npm install`
2. Start development server:
   `npm run dev`

## Production build

Build static assets:

`npm run build`

Vite outputs to `dist/`.

## Netlify deployment

This repository is Netlify-ready via `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback redirect: `/* -> /index.html`

After linking this repo to a Netlify site, all merges to the production branch auto-deploy.
