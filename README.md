# giancanevari.dev

Personal portfolio for Gian Canevari — Full Stack Developer based in Copenhagen.

**Live:** [giancanevari.dev](https://giancanevari.dev)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Rendering | React Server Components + ISR |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + shadcn/ui (zinc dark) |
| Font | Geist Sans (`geist` npm package) |
| Testing | Vitest + Testing Library (unit) · Playwright (E2E) |
| CI/CD | GitHub Actions |
| Hosting | Vercel |
| Analytics | Vercel Analytics (cookieless, no consent required) |

---

## Architecture

The site is built entirely with React Server Components. There are no client components except the mobile navigation toggle.

**Project data flow:**

```
GitHub API
    └── fetchFeaturedRepos() [server-side, RSC]
            ├── success → live repo data + projectMeta overlay
            └── error   → fallback-projects.ts (static, always works)
```

The page uses `export const revalidate = 3600` for ISR — content rebuilds at most once per hour without a manual redeploy. If the GitHub API is unavailable, `fallback-projects.ts` returns static data so the projects section never shows empty.

The resume PDF lives on Vercel Blob and is referenced via `NEXT_PUBLIC_RESUME_URL` — it is never committed to the repository.

**Key architectural decisions:**

- **RSC-first** — no client-side data fetching, no hydration overhead for content, no loading spinners
- **Page-level ISR over `unstable_cache`** — Next.js 15.5 has a regression with `unstable_cache` tag validation; page-level revalidation achieves the same 1-hour TTL without the bug
- **No animation library** — entrance animations use a CSS `@keyframes fade-up` registered as a Tailwind token (`--animate-fade-up`), keeping the JS bundle minimal
- **`<details>/<summary>` for case studies** — native HTML expand/collapse, no JS, fully accessible and keyboard navigable

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: Geist font, metadata, JSON-LD, Analytics
│   ├── page.tsx            # Section composition + revalidate export
│   ├── sitemap.ts          # Auto-generated /sitemap.xml
│   └── globals.css         # Tailwind v4 @theme block, @keyframes, base styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav with Resume CTA
│   │   ├── Footer.tsx      # Social links
│   │   └── NavToggle.tsx   # Mobile hamburger (only client component)
│   ├── sections/
│   │   ├── Hero.tsx        # Role label, name, tagline, CTAs
│   │   ├── Projects.tsx    # RSC: fetches GitHub API, renders project cards
│   │   ├── Experience.tsx  # Work history and education timeline
│   │   ├── About.tsx       # Bio paragraphs + categorised skill grid
│   │   └── Contact.tsx     # LinkedIn, Email, GitHub links
│   └── ui/
│       └── ProjectCard.tsx # Alternating layout, image hover, case study expand
├── data/
│   ├── profile.ts          # All personal content: bio, skills, meta description
│   ├── featured-repos.ts   # Ordered list of GitHub repo names to display
│   ├── project-meta.ts     # Rich content overlay: titles, case studies, images, URLs
│   ├── fallback-projects.ts # Static fallback when GitHub API is unavailable
│   └── experience.ts       # Work history and education entries
├── lib/
│   ├── github.ts           # fetchFeaturedRepos: API call + error handling + fallback
│   └── config.ts           # Environment-derived config (siteUrl, githubToken)
└── types/                  # TypeScript interfaces: Profile, GitHubRepo, ProjectMeta…

tests/
├── unit/                   # Vitest + Testing Library — 14 tests
└── e2e/                    # Playwright — contact, hero, projects, layout

public/
├── assets/                 # Project screenshots (kept under 200kb)
└── og-image.png            # Open Graph image
```

---

## Local Development

**Prerequisites:** Node.js 20+, pnpm

```bash
git clone https://github.com/Gpiero19/personal-website.git
cd personal-website
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

**Environment variables:**

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | No | Raises GitHub API rate limit from 60 to 5,000 req/hr |
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Canonical URL used in sitemap and OG tags |
| `NEXT_PUBLIC_RESUME_URL` | Yes (prod) | Vercel Blob public URL for the resume PDF |

---

## Testing

```bash
pnpm test          # Vitest unit tests (14 tests)
pnpm test:e2e      # Playwright E2E — requires dev server on :3000
pnpm typecheck     # TypeScript strict check
pnpm lint          # ESLint
pnpm build         # Production build — confirms no RSC/type errors
```

GitHub Actions runs typecheck, lint, and unit tests on every push to any branch.

---

## Content Updates

All site content lives in `src/data/` — no component changes needed for most updates:

| What to change | File |
|---|---|
| Bio, tagline, skills, contact info | `src/data/profile.ts` |
| Which GitHub projects to show | `src/data/featured-repos.ts` |
| Project titles, descriptions, case studies | `src/data/project-meta.ts` |
| Work history and education | `src/data/experience.ts` |
| Project screenshots | `public/assets/` — keep files under 200kb |
| Resume | Upload to Vercel Blob → update `NEXT_PUBLIC_RESUME_URL` in Vercel dashboard |
