import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '@/components/sections/Hero';

describe('Hero', () => {
  it('renders the LinkedIn button with correct href', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: 'LinkedIn' });
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/canevarigian/');
  });

  it('renders the View Projects link pointing to #projects', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: 'View Projects' });
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('renders the Resume link opening in a new tab', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: 'Resume' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
