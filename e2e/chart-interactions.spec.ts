import { test, expect } from '@playwright/test';

test.describe('Chart Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/reports');
    // Wait for chart animations to finish
    await page.waitForTimeout(1500);
  });

  // ── Pie Chart Tooltip ───────────────────────────────────────────────

  test('pie chart shows tooltip on sector hover', async ({ page }) => {
    const pieCard = page.locator('.recharts-wrapper').first();
    const sector = pieCard.locator('.recharts-sector').first();
    await sector.hover({ force: true });

    const tooltip = pieCard.locator('.recharts-tooltip-wrapper');
    await expect(tooltip).toBeVisible();
  });

  // ── Bar Chart Tooltip ───────────────────────────────────────────────

  test('bar chart shows tooltip on bar hover', async ({ page }) => {
    const barCard = page.locator('.recharts-wrapper').nth(1);
    const bar = barCard.locator('.recharts-bar-rectangle').first();
    await bar.hover({ force: true });

    const tooltip = barCard.locator('.recharts-tooltip-wrapper');
    await expect(tooltip).toBeVisible();
  });

  // ── Sunburst Chart Hover ────────────────────────────────────────────

  test('sunburst chart changes opacity on arc hover', async ({ page }) => {
    const sunburstCard = page
      .getByText('Sunburst Chart')
      .locator('xpath=ancestor::div[contains(@class,"card")]');

    const paths = sunburstCard.locator('svg path');

    // Collect initial opacity on the first arc
    const firstPath = paths.first();
    await expect(firstPath).toBeVisible();
    const initialOpacity = await firstPath.getAttribute('opacity');

    // Hover on a path far from the first one to trigger dimming
    const targetPath = paths.nth(10);
    await targetPath.hover({ force: true });

    // After hovering a different arc, the first path should dim
    const newOpacity = await firstPath.getAttribute('opacity');
    expect(Number(newOpacity)).toBeLessThan(Number(initialOpacity));
  });

  test('sunburst chart shows tooltip on hover', async ({ page }) => {
    const sunburstSection = page
      .getByText('Sunburst Chart')
      .locator('xpath=ancestor::div[contains(@class,"card")]');

    const svgPath = sunburstSection.locator('svg path').first();
    await svgPath.hover({ force: true });

    const tooltip = sunburstSection.locator('.pointer-events-none');
    await expect(tooltip).toBeVisible();
  });

  // ── Load Animations ─────────────────────────────────────────────────

  test('page loads with fade-in animation class', async ({ page }) => {
    await page.goto('/reports');
    const content = page.locator('.animate-fade-in');
    await expect(content).toBeVisible();
  });
});

test.describe('Route Interception – Mock API', () => {
  test('intercepts and mocks a hypothetical API request', async ({ page }) => {
    const mockChartData = [
      { name: 'Mock Corp A', value: 50, color: '#1B6CE0' },
      { name: 'Mock Corp B', value: 30, color: '#0D9488' },
      { name: 'Mock Corp C', value: 20, color: '#F59E0B' },
    ];

    await page.route('**/api/chart-data**', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockChartData),
      }),
    );

    await page.goto('/reports');

    // Page still renders with its static data since no API is called yet.
    // This demonstrates the route interception pattern for when API
    // endpoints are introduced.
    await expect(
      page.getByText('Company Balance by Counterparty').first(),
    ).toBeVisible();
  });
});
