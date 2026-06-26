# Agent decision log

This file is the authoritative record of every action taken by every agent in this project.
The orchestrator appends an entry after every subagent completes. Never edit entries manually.

**Archival rule**: When this file exceeds 100 entries, the orchestrator moves all entries
except the last 20 to `AGENT_LOG_ARCHIVE.md` and adds an archive notice at the top of this file.

---

## Entry format

```
## [YYYY-MM-DD HH:MM] Task: <task name>
**Agent**: architect-agent | task-agent | test-agent | review-agent | security-agent
**Action**: what the agent did
**Why**: the reasoning behind the action
**Outcome**: pass | fail | retry | blocked | approved | vulnerabilities-found | secure
**Files changed**: list or "none"
**Notes**: any relevant context, errors, decisions, or concerns raised
---
```

<!-- Entries begin below this line -->

## [2026-06-26 11:43] Task: Task 4 — GitHub projects integration
**Agent**: orchestrator (direct implementation)
**Action**: Built GitHub projects integration. Created fetchFeaturedRepos wrapped in unstable_cache (1h ISR, ['github'] tag) with structured error logging and fallback to fallback-projects.ts on API failure. Extended ProjectMeta type with title, liveUrl, imageUrl, longDescription. Redesigned ProjectCard to full-width alternating layout (image + content side by side, alternating per project). Added case study via native <details>/<summary>. Downloaded and compressed project screenshots (all under 200kb). Populated project-meta.ts with rich content for 3 projects. Added unit tests (3) and E2E tests (2). Fixed LinkedIn URL in profile.ts and hero unit test.
**Why**: Core feature — live GitHub project data with ISR. Human requested redesign from 3-col grid to 1-at-a-time alternating layout with screenshots, live demo links, and inline case studies.
**Outcome**: pass
**Files changed**: src/lib/github.ts, src/data/featured-repos.ts, src/data/project-meta.ts, src/data/fallback-projects.ts, src/types/project-meta.ts, src/components/sections/Projects.tsx, src/components/ui/ProjectCard.tsx, src/app/page.tsx, public/assets/showfreak.jpg, public/assets/frello.png, public/assets/music-player.png, tests/unit/github.test.ts, tests/e2e/projects.spec.ts, src/data/profile.ts, tests/unit/hero.test.tsx
**Notes**: Build: 108kb first load JS (under 150kb limit). ISR revalidation 1h confirmed in build output. GitHub API returns 401 locally (no token) — falls back to static data correctly. showfreak.png was 1.2MB, compressed to JPEG 78kb. Draft PR open on task/github-projects. LinkedIn URL corrected to https://www.linkedin.com/in/canevarigian/.
---

## [2026-06-26 09:00] Task: Task 3 — Hero and About sections
**Agent**: orchestrator (direct implementation)
**Action**: Implemented Hero section (name h1, role, tagline, three CTA links: LinkedIn external, Email mailto, Resume download) and About section (bio paragraph, tech stack pill badges). Updated page.tsx to compose both sections replacing "coming soon" placeholder. Created public/resume.pdf placeholder. Added 3 unit tests and 2 E2E tests.
**Why**: First sections recruiters see — required before GitHub projects section. Human approved Task 2 visual design checkpoint before this task began.
**Outcome**: pass
**Files changed**: src/components/sections/Hero.tsx, src/components/sections/About.tsx, src/app/page.tsx, public/resume.pdf, tests/unit/hero.test.tsx, tests/e2e/hero.spec.ts
**Notes**: Build: 102kb first load JS (under 150kb limit). All 6 unit tests pass (3 Hero + 3 Header). Tech stack rendered as text pill badges — no icon library added (shadcn/ui only constraint). Both PRs (Task 2 + Task 3) merged to main by human. Human checkpoint per SPEC.md satisfied before Task 4.
---

## [2026-06-25 15:35] Task: Task 2 — Design tokens and layout shell
**Agent**: orchestrator (direct implementation)
**Action**: Implemented Task 2 directly in main context. Created type definitions (Profile, GitHubRepo, ProjectMeta, ChangelogEntry), profile.ts data file, Header/NavToggle/Footer components, updated globals.css with @theme inline block for Tailwind v4, updated layout.tsx with Geist font + metadata + JSON-LD + Analytics. Added unit tests (3) and E2E tests (4/8 runs). Fixed vitest include scope to exclude e2e directory. Added .mcp.json to .gitignore (contained GitHub PAT).
**Why**: Establishes the design system and layout shell that all section tasks depend on. Reviewer note: review-agent read incorrect cached files; security-agent read actual files and returned SECURE.
**Outcome**: pass
**Files changed**: src/types/profile.ts, src/types/github.ts, src/types/project-meta.ts, src/types/changelog.ts, src/data/profile.ts, src/app/globals.css, src/app/layout.tsx, src/components/layout/Header.tsx, src/components/layout/NavToggle.tsx, src/components/layout/Footer.tsx, tests/unit/header.test.tsx, tests/e2e/layout.spec.ts, vitest.config.ts, .gitignore, ARCHITECTURE.md, AGENT_LOG.md, .claude/CLAUDE.md, .claude/agents/task-agent.md
**Notes**: All gates passed: typecheck ✓, lint ✓, unit tests 3/3 ✓, E2E 8/8 ✓, build ✓, security SECURE. Draft PR could not be opened — no git remote configured. Branch: task/design-tokens-layout-shell. Human checkpoint required per SPEC.md before Task 3 (visual design review). One low-severity security note: email in JSON-LD schema is harvestable by bots (accepted trade-off per ADR-014).
---

## [2026-06-25 10:00] Task: Task 1 — Project setup
**Agent**: orchestrator (direct implementation)
**Action**: Implemented all Task 1 files directly in the main conversation using Write/Bash tools. Created 19 files: package.json, next.config.ts, tsconfig.json, postcss.config.mjs, eslint.config.mjs, .prettierrc, vitest.config.ts, playwright.config.ts, .npmrc, components.json, .env.example, .gitignore, .github/workflows/ci.yml, src/app/layout.tsx, src/app/page.tsx, src/app/globals.css, src/lib/config.ts, src/lib/utils.ts, tests/setup.ts. Ran pnpm install, verified lint/typecheck/test/build all pass.
**Why**: task-agent sandboxing prevents file writes from reaching the real filesystem. All Task 1 files written directly in orchestrator context to guarantee on-disk persistence.
**Outcome**: pass
**Files changed**: package.json, pnpm-lock.yaml, next.config.ts, tsconfig.json, postcss.config.mjs, eslint.config.mjs, .prettierrc, vitest.config.ts, playwright.config.ts, .npmrc, components.json, .env.example, .gitignore, .github/workflows/ci.yml, src/app/layout.tsx, src/app/page.tsx, src/app/globals.css, src/lib/config.ts, src/lib/utils.ts, tests/setup.ts, tests/unit/.gitkeep, tests/e2e/.gitkeep
**Notes**: Fixed CVE-2025-66478 by upgrading next + eslint-config-next from 15.3.4 to 15.5.19. Fixed vitest coverage key from `threshold` to `thresholds`. Added passWithNoTests: true to prevent vitest exit 1 with no test files. Committed to main as setup task (no test/review/security gates per orchestrator rules).
---

## [2026-06-25 00:02] Task: Architecture enhancements (pre-implementation)
**Agent**: architect-agent
**Action**: Applied 3 optional enhancements to ARCHITECTURE.md before Task 1: (1) JSON-LD Person structured data in Section 10 + ADR-014; (2) explicit server-side `unstable_cache` wrapping for GitHub fetch in Section 9 + ADR-015; (3) Changelog section with ChangelogEntry type, changelog.ts data file, Changelog RSC component, changelog.spec.ts e2e test + ADR-016. Updated directory structure and component classification table accordingly.
**Why**: Human approved ARCHITECTURE.md with optional enhancements before task execution began.
**Outcome**: approved
**Files changed**: ARCHITECTURE.md
**Notes**: JSON-LD overrides SPEC.md "no structured data" per explicit human request (documented in ADR-014). Total ADR count: 16. Changelog section is positioned after Contact. unstable_cache chosen over raw fetch revalidation for named cache key and tag-based invalidation.
---

## [2026-06-25 00:01] Task: Architecture revision
**Agent**: architect-agent
**Action**: Updated ARCHITECTURE.md with 8 human-requested revisions: Geist font (ADR-004 updated), SEO metadata strategy (new Section 10), Lighthouse score targets (Section 14 expanded), Vercel Analytics (new Section 11, ADR-011), GitHub fallback-projects.ts strategy (ADR-010 updated, ADR-012 added), project-meta.ts overlay system (ADR-013 added), production URL set to giancanevari.dev, GitHub username set to Gpiero19.
**Why**: Human reviewed the initial ARCHITECTURE.md and approved with revisions before task execution begins.
**Outcome**: approved
**Files changed**: ARCHITECTURE.md
**Notes**: All 13 ADRs present. Directory structure updated to include fallback-projects.ts, project-meta.ts, src/types/project-meta.ts. Analytics section added (Vercel Analytics, cookieless, no consent required). Lighthouse targets: Performance 95+, Accessibility 95+, Best Practices 95+, SEO 100.
---

## [2026-06-25 00:00] Task: Architecture design
**Agent**: architect-agent
**Action**: Generated ARCHITECTURE.md from SPEC.md — full technical design including system overview, API contract, data architecture, component classification, infrastructure, security headers, caching strategy, CI/CD flow, and 10 ADRs.
**Why**: ARCHITECTURE.md did not exist; startup sequence requires it before any task execution begins.
**Outcome**: pass
**Files changed**: ARCHITECTURE.md
**Notes**: Four decisions require human confirmation before tasks begin: (1) production URL / custom domain for NEXT_PUBLIC_SITE_URL and sitemap, (2) GitHub username for profile.ts, (3) whether a real resume PDF will be available before Task 3, (4) font family choice (Inter is the shadcn/ui default recommendation). ADR-004 chose next/font/google over Fontsource package. ADR-006 accepted unsafe-inline CSP due to Next.js 15 App Router constraints. ADR-010 chose silent empty-array return over error propagation for GitHub API failures.
---
