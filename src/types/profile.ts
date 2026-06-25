export interface TechIcon {
  name: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  resumePath: string;
  siteUrl: string;
  metaDescription: string;
  techStack: TechIcon[];
}
