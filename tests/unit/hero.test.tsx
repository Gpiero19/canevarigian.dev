import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '@/components/sections/Hero';

describe('Hero', () => {
  it('renders the LinkedIn button with correct href', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: 'LinkedIn' });
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/canevarigian/');
  });

  it('renders the email button as a mailto link', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: 'Email' });
    expect(link).toHaveAttribute('href', 'mailto:canevarigian@gmail.com');
  });

  it('renders the resume link opening in a new tab', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: 'Download Resume' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
