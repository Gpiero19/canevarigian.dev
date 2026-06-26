import { test, expect } from '@playwright/test';

test('projects section renders at least one card', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('section#projects');
  await expect(section).toBeVisible();
  await expect(section.locator('article').first()).toBeVisible();
});

test('project cards have GitHub links', async ({ page }) => {
  await page.goto('/');
  const firstCard = page.locator('section#projects article').first();
  await expect(firstCard.getByRole('link', { name: 'View on GitHub' })).toBeVisible();
});
