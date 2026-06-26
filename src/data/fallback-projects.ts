import type { GitHubRepo } from '@/types/github';

export const fallbackProjects: GitHubRepo[] = [
  {
    name: 'ShowFreak',
    description:
      'A full-stack movie & TV tracker with personalized recommendations, a personal library, and JWT auth — powered by the TMDB API.',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/Gpiero19/ShowFreak',
  },
  {
    name: 'Trello-project',
    description:
      'A full-stack Trello-inspired kanban app with JWT auth, drag-and-drop, board templates, and a guest mode — deployed on Vercel + Render.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Gpiero19/Trello-project',
  },
  {
    name: 'Music-player',
    description:
      'A browser-based drum pad with keyboard input, BPM metronome, and session recording — built with React 19 and TypeScript.',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/Gpiero19/Music-player',
  },
];
