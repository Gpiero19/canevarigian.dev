import type { Profile } from '@/types/profile';

export const profile: Profile = {
  name: 'Gian Canevari',
  title: 'Full Stack Developer',
  tagline:
    'I build end-to-end web applications — REST APIs, relational databases, and React frontends. Open to full-stack and frontend roles.',
  bio: "I build full-stack applications from the ground up. Across three production-deployed projects I've implemented JWT authentication with refresh token rotation, a genre-weighted recommendation engine, multi-level drag-and-drop with a complete 15-route REST API, and audio scheduling precise enough to avoid JavaScript's event loop jitter. I work in TypeScript across the full stack — React on the frontend, Node.js and Express on the backend, PostgreSQL for persistence — and I care about correctness: my ShowFreak project ships with 106 automated tests. Currently looking for a full-stack or frontend role where I can ship real features from day one.",
  email: 'canevarigian@gmail.com',
  githubUsername: 'Gpiero19',
  linkedinUrl: 'https://www.linkedin.com/in/canevarigian/',
  resumePath: '/resume.pdf',
  siteUrl: 'https://giancanevari.dev',
  metaDescription:
    'Gian Canevari — Full Stack Developer building production-ready web applications with TypeScript, React, Node.js, and PostgreSQL. Open to full-stack and frontend opportunities.',
  techStack: [
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Git', icon: 'git' },
  ],
  skillCategories: [
    {
      label: 'Frontend',
      skills: ['TypeScript', 'React', 'Next.js', 'React Router', 'TanStack Query', 'Tailwind CSS', 'Vite'],
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Prisma', 'Sequelize'],
    },
    {
      label: 'Database',
      skills: ['PostgreSQL'],
    },
    {
      label: 'Testing',
      skills: ['Vitest', 'Testing Library', 'Integration Testing'],
    },
    {
      label: 'Deployment',
      skills: ['Vercel', 'Render', 'Neon', 'GitHub Pages'],
    },
    {
      label: 'Tools',
      skills: ['Git', 'GitHub', 'Web Audio API'],
    },
  ],
};
