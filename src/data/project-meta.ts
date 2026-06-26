import type { ProjectMeta } from '@/types/project-meta';

export const projectMeta: Record<string, ProjectMeta> = {
  ShowFreak: {
    title: 'ShowFreak',
    summary:
      'A full-stack movie & TV tracker with personalized recommendations, a personal library, and JWT auth — powered by the TMDB API.',
    longDescription:
      'I built ShowFreak to solve a problem I had: no tracker that actually recommended what to watch next based on what I genuinely liked. The engine scores content genre-by-genre from your ratings (5★=3pts, 4★=2pts, 3★=1pt), so recommendations improve the more you use it. All TMDB metadata is cached locally on first fetch so library queries never hit the external API. JWT auth uses refresh token rotation for silent renewal. Covered by 81 backend integration tests and 25 frontend unit tests with Vitest.',
    liveUrl: 'https://show-freak-src.vercel.app',
    imageUrl: '/assets/showfreak.jpg',
  },
  'Trello-project': {
    title: 'Frello — Kanban Board',
    summary:
      'A full-stack Trello-inspired kanban app with JWT auth, drag-and-drop, board templates, and a guest mode — deployed on Vercel + Render.',
    longDescription:
      'I wanted to understand how Trello works under the hood — so I built it. The interesting engineering challenge was guest mode: boards persist in localStorage so users can try the app instantly without an account, then migrate to a real account without losing their data. Built a complete REST API covering boards, lists, cards, labels, comments, priorities, due dates, and reusable templates. Drag-and-drop works across all entity levels. The backend is Express 5 with Sequelize 6 and PostgreSQL, validated with Joi.',
    liveUrl: 'https://trello-project-sandy.vercel.app/',
    imageUrl: '/assets/frello.png',
  },
  'Music-player': {
    title: 'DrumPad & Metronome',
    summary:
      'A browser-based drum pad with keyboard input, BPM metronome, and session recording — built with React 19 and TypeScript.',
    longDescription:
      'This started as a curiosity about the Web Audio API and turned into a deep dive into timing precision in the browser. The core challenge was rapid-fire key presses: a single AudioElement per sound creates cut-off artifacts, so I pre-created per-key pools of HTMLAudioElements cycling round-robin. The metronome uses a look-ahead scheduler (same technique as Tone.js) to schedule beats 25ms ahead, avoiding audio glitches from JavaScript\'s single-threaded event loop. Record-and-replay captures millisecond-accurate timestamps. Full keyboard accessibility with ARIA labels.',
    liveUrl: 'https://gpiero19.github.io/Music-player/',
    imageUrl: '/assets/music-player.png',
  },
};
