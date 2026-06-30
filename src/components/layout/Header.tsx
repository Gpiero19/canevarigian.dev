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

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-[20px] border transition-all duration-500 ${
          scrolled
            ? 'top-3.5 h-[46px] rounded-full shadow-lg'
            : 'top-0 w-full h-16 rounded-none border-b'
        }`}
        style={{
          width: scrolled ? (isMobile ? 'calc(100vw - 28px)' : '610px') : '100%',
          maxWidth: scrolled && isMobile ? 'calc(100vw - 28px)' : undefined,
          backgroundColor: scrolled ? 'rgba(22, 18, 37, 0.95)' : 'rgba(18, 16, 31, 0.88)',
          borderColor: scrolled ? 'rgb(61, 57, 97)' : 'rgb(36, 31, 56)',
        }}
      >
        <div className={`w-full h-full flex items-center justify-between ${scrolled ? 'px-5' : 'px-6'}`}>
          <Link
            href="/"
            aria-label="Gian Canevari"
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
                  className={`font-medium no-underline transition-colors duration-150 hover:text-foreground whitespace-nowrap ${scrolled ? 'text-xs' : 'text-sm'}`}
                  style={{ color: 'rgb(158, 156, 168)' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={process.env.NEXT_PUBLIC_RESUME_URL ?? '/resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium no-underline rounded-full transition-all duration-200 whitespace-nowrap ${scrolled ? 'text-xs px-3 py-1' : 'text-sm px-3.5 py-1.5'}`}
                style={{
                  color: 'rgb(158, 156, 168)',
                  border: '1px solid rgb(60, 60, 60)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(30, 30, 30)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgb(90, 90, 90)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgb(60, 60, 60)';
                }}
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
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: 'rgb(200, 190, 230)' }} />
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'rgb(200, 190, 230)' }} />
              <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: 'rgb(200, 190, 230)' }} />
            </button>
          )}
        </div>
      </header>

      {isMobile && (
        <div
          className={`fixed inset-0 z-40 backdrop-blur-[20px] flex flex-col items-center justify-center gap-9 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundColor: 'rgba(15, 12, 25, 0.97)' }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-2xl cursor-pointer bg-transparent border-none p-2"
            style={{ color: 'rgb(158, 156, 168)' }}
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold no-underline transition-colors hover:text-[rgb(118,200,84)]"
              style={{ color: 'rgb(225, 220, 255)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={process.env.NEXT_PUBLIC_RESUME_URL ?? '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold no-underline transition-colors hover:text-[rgb(118,200,84)]"
            style={{ color: 'rgb(225, 220, 255)' }}
          >
            Resume ↗
          </a>
        </div>
      )}
    </>
  );
}
