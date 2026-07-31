---
name: Vercel deployment quirks for this project
description: Lessons from deploying the bydauto site to Vercel from this monorepo
---
- The Vercel Replit connection is "added" but `listConnections("vercel")` always returns `[]` — credentials are withheld from the sandbox. Do not retry-loop; guide the user through the dashboard instead.
- **Why:** two user re-validations of the connection changed nothing; it's a platform limitation.
- Vercel project for the site uses Root Directory `artifacts/bydauto`; output must be declared via `artifacts/bydauto/vercel.json` (`outputDirectory: "dist/public"`). A root-level vercel.json is ignored when the project root is a subdirectory.
- To "redeploy" without dashboard/API access, push a commit (even empty) — Vercel auto-deploys `main` of github.com/jarix13/AUOI.
- Web3Forms blocks submissions from `.replit.dev` and `.replit.app` origins; the offer form only works from the real domain (bydauto.ae).
