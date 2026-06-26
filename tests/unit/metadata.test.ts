import { describe, it, expect, vi } from 'vitest';

vi.mock('geist/font/sans', () => ({
  GeistSans: { variable: '--font-geist-sans', className: 'geist-sans' },
}));
vi.mock('@vercel/analytics/react', () => ({ Analytics: () => null }));

import { metadata } from '@/app/layout';

describe('page metadata', () => {
  it('has correct title format', () => {
    expect(metadata.title).toBe('Gian Canevari — Full Stack Developer');
  });

  it('has og:title', () => {
    expect((metadata.openGraph as { title?: string })?.title).toBe(
      'Gian Canevari — Full Stack Developer',
    );
  });

  it('has og:description', () => {
    expect((metadata.openGraph as { description?: string })?.description).toBeTruthy();
  });

  it('has og:image', () => {
    const images = (metadata.openGraph as { images?: unknown[] })?.images;
    expect(images).toBeDefined();
    expect(images!.length).toBeGreaterThan(0);
  });

  it('has og:url', () => {
    expect((metadata.openGraph as { url?: string })?.url).toBeTruthy();
  });
});
