import { test, expect } from '@playwright/test';

test.describe('Sidebar Navigation', () => {
  test('navigates to /reports when clicking the Reports nav item', async ({
    page,
  }) => {
    await page.goto('/');
    await page.getByTitle('Reports').click();
    await expect(page).toHaveURL('/reports');
  });

  test('navigates to /analytics when clicking the Analytics nav item', async ({
    page,
  }) => {
    await page.goto('/');
    await page.getByTitle('Analytics').click();
    await expect(page).toHaveURL('/analytics');
  });

  test('reports nav item is highlighted when on /reports', async ({ page }) => {
    await page.goto('/reports');
    const reportsLink = page.getByTitle('Reports');
    await expect(reportsLink).toHaveClass(/bg-brand-primary-light/);
  });

  test('can navigate back to home from /reports', async ({ page }) => {
    await page.goto('/reports');
    await page.getByTitle('Dashboard').click();
    await expect(page).toHaveURL('/');
  });

  test('sidebar displays all main navigation items', async ({ page }) => {
    await page.goto('/');

    const expectedItems = [
      'Dashboard',
      'Funds',
      'Messages',
      'Documents',
      'Transfers',
      'Reports',
      'Compliance',
      'Analytics',
      'Team',
    ];

    for (const label of expectedItems) {
      await expect(page.getByTitle(label)).toBeVisible();
    }
  });

  test('sidebar displays others navigation group', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTitle('Settings')).toBeVisible();
    await expect(page.getByTitle('Help')).toBeVisible();
  });
});
