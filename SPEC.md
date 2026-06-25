# Project spec: Personal Portfolio — Gian Canevari

---

## Goal
A fast, statically-rendered personal portfolio website for Gian Canevari, a junior software developer actively seeking employment. The site showcases live GitHub projects, provides a short bio, and gives recruiters a direct path to LinkedIn, email, and a downloadable resume. No database, no auth, no CMS — all content is version-controlled in the repository and deployed automatically on every push to main.

---

## Tech stack

- Language: TypeScript
- Framework: Next.js 15 (App Router, React Server Components)
- Runtime version: Node.js 20
- Package manager: pnpm
- Database: none
- Test framework: Vitest + React Testing Library
- Test command: `pnpm test`
- Lint command: `pnpm lint`
- Typecheck command: `pnpm typecheck`
- E2E test framework: Playwright

---

## Non-functional requirements

- **Performance**: LCP target: 1500ms | Total JS bundle limit: 150kb (gzipped) | Max image size: 200kb
- **Accessibility**: WCAG 2.1 AA
- **Browser support**: Chrome 120+, Firefox 120+, Safari 17+, Edge 120+, mobile Safari iOS 16+
- **SEO**: Meta tags required, Open Graph required, Sitemap required, Structured data: no
- **Uptime target**: 99.9% (Vercel SLA)

---

## Auth strategy

- Strategy: none — fully public site, no login required
- Session/token storage: n/a
- Role-based access: no

---

## API standards

- API style: none (frontend only — one Next.js API route for GitHub data fetching at build time)
- Versioning: n/a
- Error response format: n/a
- Documentation: inline comments

---

## Infrastructure and environments

- Environments: dev, production
- Hosting: Vercel (free tier)
- CI/CD pipeline: GitHub Actions — lint + typecheck + unit tests on every PR; auto-deploy to Vercel on merge to main
- Object storage: none
- Session store: none
- Error tracking: none (scope: MVP)
- Metrics and tracing: none (scope: MVP)

---

## External dependencies

| Service | Purpose | Required from day one? |
|---|---|---|
| GitHub REST API | Fetch public repo metadata (name, description, language, stars, URL) for the projects section | Yes |
| Vercel | Hosting and CDN | Yes |
| Google Fonts (or Fontsource) | Typography | Yes |

---

## Data privacy and GDPR

- GDPR applies: no — no user data collected, no cookies, no analytics
- Cookie consent required: no
- PII collected: none

---

## Test coverage threshold

- Minimum coverage: 70%
- Test types required: unit, e2e

---

## Dependency policy

- All dependencies pinned to exact versions: yes
- Dependency audit runs in CI: yes (`pnpm audit` in GitHub Actions)

---

## Branching strategy

- Strategy: feature branches (`task/<task-name>`)
- Main branch name: main
- Protected branches: main (require PR + CI green before merge)

---

## Feature flags

- Feature flags in use: no

---

## i18n

- Internationalization required: no — English only

---

## Site sections (in order)

1. **Hero** — Name, role title ("Software Developer"), one-line tagline, CTA buttons: LinkedIn, Email, Download Resume
2. **About** — 2–3 sentence bio, tech stack icons (languages/frameworks you use)
3. **Projects** — Grid of cards pulled live from GitHub API. Each card: repo name, description, primary language, star count, link to repo. Pinned/featured repos shown first.
4. **Contact** — "Get in touch" section: LinkedIn button, mailto: email link, GitHub link. No form.

---

## Content files

- `src/data/profile.ts` — name, title, tagline, bio, social links, resume PDF path
- `src/data/featured-repos.ts` — list of GitHub repo names to feature (others hidden)
- `public/resume.pdf` — placeholder until replaced with real resume

---

## Definition of done

A task is considered complete when:
- [ ] Tests pass and coverage threshold met (70%)
- [ ] Review approved
- [ ] Security approved
- [ ] Code merged to main branch
- [ ] Deployed to Vercel production
- [ ] Smoke test on production URL passed

---

## Constraints

- No Firebase, no Supabase, no database of any kind
- No contact form — email/LinkedIn links only
- GitHub API calls must be made server-side (RSC or `generateStaticParams`) — never expose tokens to the client
- GitHub API token must be in environment variables, never hardcoded
- All images must go through Next.js `<Image>` component for optimization
- shadcn/ui components only — no installing additional component libraries

---

## Out of scope

- Blog or MDX content
- Admin panel or CMS
- Authentication of any kind
- Analytics (can be added post-launch)
- Dark/light mode toggle (pick one and commit — dark is fine)
- Animations beyond CSS transitions

---

## Human checkpoints

- Pause after Task 2 (design tokens + layout shell): review the visual design before implementing sections
- Pause after Task 5 (GitHub integration): confirm the projects section looks correct with real data before continuing

---

## MCP tools

- [x] GitHub MCP — used by agents to inspect repos, create PRs, check CI status
- [x] Playwright MCP — E2E browser testing with screenshots for visual verification
- [ ] Supabase MCP — not used
- [ ] PostgreSQL MCP — not used

---

## Task list (ordered)

### Task 1 — Project setup [setup]
**What**: Initialize Next.js 15 with TypeScript, Tailwind CSS, shadcn/ui, Vitest, Playwright. Configure ESLint, Prettier, tsconfig paths. Set up GitHub Actions workflow for lint + typecheck + test on PR.
**Why**: Establishes the foundation every subsequent task builds on.
**Files**: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `.eslintrc.json`, `.prettierrc`, `vitest.config.ts`, `playwright.config.ts`, `.github/workflows/ci.yml`
**Test types**: none (setup task)
**Acceptance criteria**:
- `pnpm dev` starts without errors
- `pnpm lint` passes
- `pnpm typecheck` passes
- `pnpm test` runs (0 tests, no failures)
- GitHub Actions workflow file present and valid YAML

### Task 2 — Design tokens and layout shell [feature]
**What**: Define global design tokens (colors, typography, spacing) in Tailwind config. Implement the root layout: `<html>`, `<body>`, site-wide `<Header>` with name/nav links, `<Footer>` with copyright and social icons. Choose and apply a Google Font.
**Why**: Every section task depends on a consistent layout wrapper and design system being in place first.
**Files**: `src/app/layout.tsx`, `src/app/globals.css`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `tailwind.config.ts`, `src/data/profile.ts`
**Test types**: unit (Header renders nav links), e2e (page has header and footer)
**Acceptance criteria**:
- Header shows site name and nav links (About, Projects, Contact)
- Footer shows copyright and icon links for GitHub, LinkedIn, Email
- Design tokens defined in Tailwind config (brand color, font family)
- Passes WCAG AA color contrast check
- Renders correctly at 375px, 768px, 1280px

### Task 3 — Hero and About sections [feature]
**What**: Implement the Hero section (name, role, tagline, three CTA buttons: LinkedIn, Email, Download Resume) and the About section (bio text, tech stack icon row). Wire up `src/data/profile.ts` as the single source of truth for all personal data.
**Why**: These are the first things a recruiter sees — must be complete before the projects section.
**Files**: `src/app/page.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/About.tsx`, `src/data/profile.ts`, `public/resume.pdf` (placeholder)
**Test types**: unit (Hero renders CTA buttons with correct hrefs), e2e (screenshot of above-the-fold on mobile and desktop)
**Acceptance criteria**:
- LinkedIn button links to correct LinkedIn URL
- Email button is a `mailto:` link with correct address
- Download Resume button links to `/resume.pdf` with `download` attribute
- Bio text and tech stack icons render from `profile.ts`
- Resume PDF placeholder exists at `public/resume.pdf`

### Task 4 — GitHub projects integration [feature]
**What**: Implement server-side GitHub API fetching (using the REST API) to retrieve public repos for a configured GitHub username. Filter to only repos listed in `src/data/featured-repos.ts`. Display as a responsive card grid: repo name, description, primary language, star count, link to GitHub. Implement ISR with a 1-hour revalidation interval.
**Why**: This is the core differentiator of the site — live, always-current project data without manual updates.
**Files**: `src/data/featured-repos.ts`, `src/lib/github.ts`, `src/components/sections/Projects.tsx`, `src/components/ui/ProjectCard.tsx`, `src/app/page.tsx`
**Test types**: unit (github.ts fetch function with mocked API response), e2e (projects section renders at least one card)
**Acceptance criteria**:
- Projects fetched server-side — no GitHub token exposed to client
- `GITHUB_TOKEN` read from environment variable (optional but enables higher rate limit)
- Only repos in `featured-repos.ts` are shown
- Each card shows: name, description (fallback if null), language badge, star count, link
- Grid is responsive: 1 col mobile, 2 col tablet, 3 col desktop
- If GitHub API fails, graceful fallback (empty state message, no crash)
- ISR revalidation set to 3600 seconds

### Task 5 — Contact section and SEO [feature]
**What**: Implement the Contact section (heading, short copy, three icon buttons: LinkedIn, Email, GitHub). Add full SEO metadata: page title, meta description, Open Graph tags (title, description, image, URL), Twitter card tags. Generate `sitemap.xml` using Next.js sitemap support.
**Why**: SEO and the contact section complete the page. Open Graph ensures the site looks good when shared on LinkedIn or Twitter.
**Files**: `src/components/sections/Contact.tsx`, `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/og-image.png` (placeholder)
**Test types**: unit (metadata object contains required OG fields), e2e (contact section links render with correct hrefs)
**Acceptance criteria**:
- Contact section has LinkedIn, Email, and GitHub links
- `<head>` contains `og:title`, `og:description`, `og:image`, `og:url`
- `sitemap.xml` is accessible at `/sitemap.xml` and contains the homepage URL
- OG image placeholder exists at `public/og-image.png`
- Page title format: "Gian Canevari — Software Developer"
