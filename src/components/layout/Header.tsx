'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((window.scrollY || document.documentElement.scrollTop) > 60);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const center = window.innerHeight / 2;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= center && rect.bottom >= center;
      });
      setActiveSection(current ? current.id : '');
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-[20px] border transition-all duration-500 ${
          scrolled
            ? 'top-3.5 h-[46px] rounded-full shadow-lg bg-navbar-bubble border-stroke-nav-bubble'
            : 'top-0 w-full h-16 rounded-none border-b bg-navbar border-stroke-nav'
        }`}
        style={{
          width: scrolled ? (isMobile ? 'calc(100vw - 28px)' : '610px') : '100%',
          maxWidth: scrolled && isMobile ? 'calc(100vw - 28px)' : undefined,
        }}
      >
        <div className={`w-full h-full flex items-center justify-between ${scrolled ? 'px-5' : 'px-6'}`}>
          <Link
            href="/"
            aria-label="Gian Canevari"
            onClick={() => {
              setActiveSection('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-mono font-medium tracking-widest text-foreground no-underline transition-all duration-500 ${scrolled ? 'text-xs' : 'text-sm'}`}
          >
            GC
            <span className="inline-block w-1.5 h-[1em] bg-foreground ml-1 animate-[blink-cursor_1s_step-start_infinite] align-middle" />
          </Link>

          {!isMobile && (
            <nav aria-label="Main navigation" className={`flex items-center ${scrolled ? 'gap-3' : 'gap-6'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`no-underline transition-colors duration-150 whitespace-nowrap ${scrolled ? 'text-xs' : 'text-sm'} ${
                    activeSection === link.href.slice(1)
                      ? 'font-semibold text-foreground'
                      : 'font-medium text-text-muted hover:text-text-hover'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={process.env.NEXT_PUBLIC_RESUME_URL ?? '/resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium no-underline rounded-full border border-stroke text-text-hover transition-all duration-200 whitespace-nowrap hover:bg-surface hover:border-stroke-hover ${scrolled ? 'text-xs px-3 py-1' : 'text-sm px-3.5 py-1.5'}`}
              >
                Resume ↗
              </a>
            </nav>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-none cursor-pointer rounded-lg"
              aria-label="Open navigation menu"
            >
              <span className={`block w-5 h-0.5 rounded bg-text-hover transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 rounded bg-text-hover transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 rounded bg-text-hover transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          )}
        </div>
      </header>

      {isMobile && (
        <div
          className={`fixed inset-0 z-40 backdrop-blur-[20px] bg-[oklch(6%_0.012_255/0.97)] flex flex-col items-center justify-center gap-9 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-2xl cursor-pointer bg-transparent border-none p-2 text-text-muted"
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold no-underline transition-colors text-text-hover hover:text-accent-green"
            >
              {link.label}
            </a>
          ))}
          <a
            href={process.env.NEXT_PUBLIC_RESUME_URL ?? '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold no-underline transition-colors text-text-hover hover:text-accent-green"
          >
            Resume ↗
          </a>
        </div>
      )}
    </>
  );
}
