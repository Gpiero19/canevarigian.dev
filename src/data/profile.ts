import type { Profile } from '@/types/profile';

export const profile: Profile = {
  name: 'Gian Canevari',
  title: 'Full Stack Developer',
  tagline:
    'I build full-stack web applications end-to-end — from database schema to deployed UI. My work ships with tests, handles edge cases, and stays fast.',
  bio: "Full-stack developer based in Copenhagen. I transitioned into software engineering through a Python bootcamp in Berlin after a degree in industrial engineering, and have since built four production-deployed applications across the full stack — REST APIs, relational databases, React frontends, and this portfolio itself. Currently doing freelance web development and recently completed an AI automation internship working with Make.com and Claude Code.\n\nAcross those projects I've shipped JWT refresh token rotation, a genre-weighted recommendation engine, multi-level drag-and-drop with a 15-route REST API, and a Web Audio API look-ahead scheduler — backed by 106 automated tests. My engineering background means I think in systems before I write code.\n\nAvailable now for full-stack and frontend roles, remote or on-site in Copenhagen. TypeScript across the full stack, Python with Django when the work calls for it. I speak English (C1), Spanish (native), Italian, and conversational Danish.",
  email: 'canevarigian@gmail.com',
  githubUsername: 'Gpiero19',
  linkedinUrl: 'https://www.linkedin.com/in/canevarigian/',
  resumePath: '/resume.pdf',
  siteUrl: 'https://canevarigian.dev',
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
