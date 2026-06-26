import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Get in touch</h2>
        <p className="mb-10 text-lg text-muted-foreground">
          I&apos;m open to full-stack and frontend roles — remote or on-site. If my work looks like a fit for your team, reach out on LinkedIn or by email.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
