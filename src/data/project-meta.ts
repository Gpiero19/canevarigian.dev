import type { ProjectMeta } from '@/types/project-meta';

export const projectMeta: Record<string, ProjectMeta> = {
  ShowFreak: {
    title: 'ShowFreak — Streaming Tracker',
    summary:
      'Full-stack streaming tracker with a custom genre-weighted recommendation engine, JWT refresh token rotation, and 106 automated tests — deployed on Vercel + Render + Neon.',
    longDescription:
      'Every streaming tracker I tried surfaced the same trending content regardless of what I actually watched. ShowFreak fixes that with a recommendation engine that weights genres from your rated content (5★=3pts, 4★=2pts, 3★=1pt) — the more you rate, the more accurate it gets.\n\nThe key architectural decision was local content caching: all TMDB metadata is stored in a local content_cache table on first fetch, so library queries and sorting never hit the external API. This eliminated the N+1 problem at the API boundary and made the library fast regardless of TMDB\'s response time.\n\nJWT auth uses refresh token rotation — every token refresh issues a new refresh token and invalidates the old one, so a stolen token becomes useless after one use. The full test suite covers 81 backend integration tests and 25 frontend unit tests, giving me confidence to refactor without regressions.\n\nI built ShowFreak using AI-assisted development throughout — starting with Kilo Code for architecture and scaffolding, then switching to Claude Code for debugging, refactoring, and feature delivery. This workflow cut implementation time significantly and is now how I approach every project.\n\nStack: React 18 + TypeScript · Node.js 20 + Express · PostgreSQL 16 + Prisma · TanStack Query · Vitest · Vercel + Render + Neon',
    liveUrl: 'https://show-freak-src.vercel.app',
    imageUrl: '/assets/showfreak.jpg',
  },
  'Trello-project': {
    title: 'Frello — Kanban Board',
    summary:
      'Full-stack Trello clone with a 15-route REST API, multi-level drag-and-drop, and a guest-to-account migration that preserves all board state — deployed on Vercel + Render.',
    longDescription:
      'I built Frello to understand how Trello actually works under the hood — not just the UI, but the data model and API that makes complex board state consistent across sessions.\n\nThe most interesting engineering challenge was guest mode. I wanted users to try the app without signing up, but losing your boards on registration would kill conversion. The solution: boards created in guest mode persist in localStorage; on account creation, the app migrates the entire board structure to the server without any visible interruption.\n\nThe REST API covers boards, lists, cards, labels, comments, priorities, due dates, and reusable templates — 15 routes total, validated with Joi. Drag-and-drop works across all entity levels: you can reorder boards, reorder lists within a board, and move cards between lists. Express 5 on the backend with Sequelize 6 ORM and PostgreSQL.\n\nStack: React 19 · React Router 7 · Node.js + Express 5 · PostgreSQL + Sequelize 6 · JWT Auth · Vite · Vercel + Render',
    liveUrl: 'https://trello-project-sandy.vercel.app/',
    imageUrl: '/assets/frello.png',
  },
  'Music-player': {
    title: 'DrumPad & Metronome',
    summary:
      'Browser-based drum sequencer with a look-ahead beat scheduler and per-key audio pools to eliminate playback artifacts under rapid input — React 19 + TypeScript + Web Audio API.',
    longDescription:
      'This started as a curiosity about the Web Audio API and became a study in browser timing constraints and performance engineering.\n\nThe first problem: rapid repeated hits on the same pad cut off the previous sound. A single HTMLAudioElement per pad can only play one instance at a time. I pre-created a pool of 3 HTMLAudioElements per key at mount, cycling round-robin so rapid inputs overlap correctly without artifacts.\n\nThe second problem: a naïve setTimeout-based metronome drifts badly under JavaScript\'s single-threaded event loop. I implemented a look-ahead scheduler — the same technique used by Tone.js — that schedules Web Audio API events 25ms ahead of playback time, decoupling the scheduler from the main thread and eliminating audible drift at any BPM.\n\nRecording captures millisecond-accurate timestamps; replay drives a setTimeout chain with a ref-based abort flag so playback can be cancelled mid-sequence. All five custom hooks (useAudioPool, useRecording, useRecordingHistory, usePlayback, useMetronome) are independently unit-tested. Full keyboard accessibility with ARIA labels and prefers-reduced-motion support.\n\nStack: React 19 · TypeScript · Vite · Web Audio API · Vitest + Testing Library · GitHub Pages',
    liveUrl: 'https://gpiero19.github.io/Music-player/',
    imageUrl: '/assets/music-player.png',
  },
  'personal-website': {
    title: 'This Portfolio — giancanevari.dev',
    summary:
      'Production portfolio built with Next.js 15 App Router and React Server Components — featuring ISR, GitHub API integration, CI/CD via GitHub Actions, and 14 automated tests.',
    longDescription:
      'I built this portfolio to the same standard I\'d apply to a client project — not as a static site, but as a production Next.js application.\n\nThe architecture uses React Server Components throughout: the GitHub API fetch runs server-side with a 1-hour ISR revalidation cycle, so the project list updates automatically without a redeploy. A static fallback fires if the API is unavailable, making the site resilient to GitHub outages. The resume is hosted on Vercel Blob (never committed to the repo) and served via an environment variable.\n\nThe design system is Tailwind CSS v4 with a custom @theme inline block and shadcn/ui zinc dark tokens. Geist Sans is loaded via the geist npm package as a Next.js font variable. Animations use CSS @keyframes registered as Tailwind tokens — no animation library added.\n\nThe test suite covers 14 unit tests (Vitest + Testing Library) and a Playwright E2E suite. GitHub Actions runs typecheck, lint, and the unit suite on every push. JSON-LD structured data, a generated /sitemap.xml, and Open Graph tags handle SEO.\n\nStack: Next.js 15 · React Server Components · TypeScript · Tailwind CSS v4 · shadcn/ui · Vitest · Playwright · GitHub Actions · Vercel',
    liveUrl: 'https://giancanevari.dev',
    imageUrl: '/assets/portfolio.jpg',
  },
};
