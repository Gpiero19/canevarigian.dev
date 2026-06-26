import type { Profile } from '@/types/profile';

export const profile: Profile = {
  name: 'Gian Canevari',
  title: 'Full Stack Developer',
  tagline:
    'I build full-stack web applications end-to-end — from database schema to deployed UI. My work ships with tests, handles edge cases, and stays fast.',
  bio: "I'm an industrial engineer from Chile who transitioned into software development through a Python developer bootcamp in Berlin. Since then I've built three production-deployed full-stack applications covering REST APIs, relational databases, and React frontends — and I design AI-assisted automation workflows using Make.com and AI coding agents as part of my daily engineering practice.\n\nAcross my projects I've shipped JWT refresh token rotation, a genre-weighted recommendation engine, multi-level drag-and-drop with a 15-route REST API, and a Web Audio API look-ahead scheduler — backed by 106 automated tests in ShowFreak. My engineering background gives me a structured approach to problem decomposition before I write a line of code.\n\nI work in TypeScript across the full stack (React · Node.js · Express · PostgreSQL) and also in Python with Django REST Framework. I speak English (C1), Spanish (native), Italian, and conversational Danish. Open to full-stack and frontend roles — remote or on-site in Copenhagen.",
  email: 'canevarigian@gmail.com',
  githubUsername: 'Gpiero19',
  linkedinUrl: 'https://www.linkedin.com/in/canevarigian/',
  resumePath: '/resume.pdf',
  siteUrl: 'https://giancanevari.dev',
  metaDescription:
    'Gian Canevari — Full Stack Developer based in Copenhagen. Builds production web applications with TypeScript, React, Node.js, and PostgreSQL. Also works with Python, Django, and AI automation workflows. Open to remote and on-site roles.',
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
      skills: ['TypeScript', 'React', 'Next.js', 'React Router', 'TanStack Query', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django REST', 'REST APIs', 'JWT Auth', 'Prisma', 'Sequelize'],
    },
    {
      label: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'SQL'],
    },
    {
      label: 'AI & Automation',
      skills: ['Make.com', 'Claude Code', 'Prompt Engineering', 'AI Workflows'],
    },
    {
      label: 'Testing',
      skills: ['Vitest', 'Testing Library', 'Integration Testing'],
    },
    {
      label: 'Tools',
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Vercel', 'Render', 'Azure / AWS'],
    },
  ],
};
