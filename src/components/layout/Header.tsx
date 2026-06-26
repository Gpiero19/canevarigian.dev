import Link from 'next/link';
import NavToggle from './NavToggle';
import { profile } from '@/data/profile';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
        >
          {profile.name}
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={process.env.NEXT_PUBLIC_RESUME_URL ?? '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Resume
          </a>
        </nav>

        <NavToggle links={navLinks} />
      </div>
    </header>
  );
}
