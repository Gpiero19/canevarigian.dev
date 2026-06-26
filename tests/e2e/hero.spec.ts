import { test, expect } from '@playwright/test';

test('hero renders above the fold on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Gian Canevari' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Email' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download Resume' })).toBeVisible();
});

test('hero renders above the fold on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Gian Canevari' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download Resume' })).toBeVisible();
});
