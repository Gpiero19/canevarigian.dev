export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education';
  highlights: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'Copenhagen, Denmark',
    period: 'May 2025 – Present',
    type: 'work',
    highlights: [
      'Building and maintaining web projects with custom backend logic, APIs, and structured content systems',
      'Managing full deployment lifecycle — version control, CI/CD, and Vercel hosting',
      'Working across the full stack: React frontends, Node.js APIs, and PostgreSQL databases',
    ],
  },
  {
    role: 'AI-Powered SEO Intern',
    company: 'Copenhagen, Denmark',
    location: 'Copenhagen, Denmark',
    period: 'Jan 2026 – Mar 2026',
    type: 'work',
    highlights: [
      'Built AI-assisted content workflows using Make.com, structured datasets, and CMS integrations',
      'Designed repeatable automation pipelines combining prompt engineering with structured data',
      'Tested and refined LLM outputs iteratively to improve reliability and consistency',
    ],
  },
  {
    role: 'Python Developer Bootcamp',
    company: 'Berlin Technological Academy',
    location: 'Berlin, Germany',
    period: '2023 – 2024',
    type: 'education',
    highlights: [
      'Python, Django REST Framework, SQL, Git/GitHub, and Docker fundamentals',
      'Transitioned from industrial engineering into software development',
    ],
  },
  {
    role: 'Bachelor\'s in Industrial Engineering',
    company: 'Universidad Adolfo Ibáñez',
    location: 'Chile',
    period: '2015 – 2020',
    type: 'education',
    highlights: [
      'Systems thinking, analytical problem-solving, and operational decision-making',
      'Foundation in structured reasoning that carries directly into software architecture',
    ],
  },
];
