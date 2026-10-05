# Portfolio (Next.js + TypeScript + Tailwind)

    npm install
    npm run dev      # http://localhost:3000

## Contact form email
Contact submissions are validated by the browser and `/api/contact`, then sent to
`tiwaripankaj2013@gmail.com` using [Resend](https://resend.com/).

Configure these server-side environment variables in local `.env.local` and in your deployment:

- `RESEND_API_KEY` — a Resend API key.
- `CONTACT_FROM_EMAIL` — a sender address on a domain verified with Resend (for example, `Portfolio <contact@your-verified-domain.com>`).

The contact API returns an error instead of reporting success when email delivery is not configured.

## Structure
- `src/data/portfolio.json`  all static content + theme colors (single source of truth)
- `src/lib/api.ts`           `getPortfolio()` — swap the JSON import for a `fetch` to go API-driven
- `src/app/api/portfolio`    GET endpoint that serves the same JSON
- `src/lib/theme.ts`         JSON palette → CSS variables (`--primary`, `--bg`, ...)
- `tailwind.config.ts`       maps tokens to utilities (`bg-primary`, `text-muted`, `border-border`)
- `src/components/ui`        small reusable pieces (Button, Card, Badge, Section, Icon, ...)
- `src/components/sections`  page sections composed from ui pieces + JSON data

## Theming
Edit `theme.light` / `theme.dark` in the JSON (hex values). Add a token by adding a key in both
palettes and one line in `tailwind.config.ts`. Toggle uses `next-themes` (class strategy, no flash).
