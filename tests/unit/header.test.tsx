import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '@/components/layout/Header';

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('Header', () => {
  it('renders the site name as a link', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Gian Canevari' })).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(nav).toBeInTheDocument();
    expect(nav.querySelector('a[href="#about"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="#projects"]')).toBeInTheDocument();
    expect(nav.querySelector('a[href="#contact"]')).toBeInTheDocument();
  });

  it('renders the mobile toggle button', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 });
    window.dispatchEvent(new Event('resize'));
    render(<Header />);
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toBeInTheDocument();
  });
});
