import { test, expect } from '@playwright/test';

test('contact section has LinkedIn link', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('section#contact');
  await expect(section.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  await expect(section.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/canevarigian/',
  );
});

test('contact section has Email link', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('section#contact');
  await expect(section.getByRole('link', { name: 'Email' })).toBeVisible();
  await expect(section.getByRole('link', { name: 'Email' })).toHaveAttribute(
    'href',
    'mailto:canevarigian@gmail.com',
  );
});

test('contact section has GitHub link', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('section#contact');
  await expect(section.getByRole('link', { name: 'GitHub' })).toBeVisible();
  await expect(section.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/Gpiero19',
  );
});
