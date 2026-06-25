import { test, expect } from '@playwright/test';

test('page has a header with the site name', async ({ page }) => {
  await page.goto('/');
  const header = page.getByRole('banner');
  await expect(header).toBeVisible();
  await expect(header.getByRole('link', { name: 'Gian Canevari' })).toBeVisible();
});

test('desktop nav links are present in the DOM', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('a[href="#about"]').first()).toBeAttached();
  await expect(page.locator('a[href="#projects"]').first()).toBeAttached();
  await expect(page.locator('a[href="#contact"]').first()).toBeAttached();
});

test('page has a footer with social links', async ({ page }) => {
  await page.goto('/');
  const footer = page.getByRole('contentinfo');
  await expect(footer).toBeVisible();
  await expect(footer.getByRole('link', { name: 'GitHub' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  await expect(footer.getByRole('link', { name: 'Email' })).toBeVisible();
});

test('footer shows copyright with current year', async ({ page }) => {
  await page.goto('/');
  const footer = page.getByRole('contentinfo');
  const year = new Date().getFullYear().toString();
  await expect(footer).toContainText(year);
  await expect(footer).toContainText('Gian Canevari');
});
