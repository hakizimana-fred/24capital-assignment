import { test, expect } from '@playwright/test';

test.describe('Reports Page – Chart Rendering', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/reports');
  });

  test('displays the page header', async ({ page }) => {
    await expect(
      page.getByText('Pie Chart – Company Balance by Counterparty'),
    ).toBeVisible();
    await expect(
      page.getByText('Review the size of company by selected period'),
    ).toBeVisible();
  });

  // ── Pie Chart ───────────────────────────────────────────────────────

  test('renders the pie chart card with title', async ({ page }) => {
    await expect(
      page.getByText('Company Balance by Counterparty').first(),
    ).toBeVisible();
  });

  test('pie chart renders SVG with path elements', async ({ page }) => {
    const pieContainer = page
      .locator('.recharts-wrapper')
      .first();

    await expect(pieContainer).toBeVisible();

    const piePaths = pieContainer.locator('.recharts-sector');
    await expect(piePaths.first()).toBeVisible();

    const count = await piePaths.count();
    expect(count).toBeGreaterThanOrEqual(8);
  });

  test('pie chart displays percentage labels', async ({ page }) => {
    await expect(page.getByText('33.3%')).toBeVisible();
    await expect(page.getByText('21.7%')).toBeVisible();
  });

  // ── Bar Chart ───────────────────────────────────────────────────────

  test('renders the horizontal bar chart card', async ({ page }) => {
    await expect(
      page.getByText('Symbol-Level Returns: Jan 26 vs Feb-26'),
    ).toBeVisible();
  });

  test('bar chart renders bars for both datasets', async ({ page }) => {
    const barContainer = page.locator('.recharts-bar-rectangles');
    await expect(barContainer.first()).toBeVisible();

    const barGroups = await barContainer.count();
    expect(barGroups).toBe(2);
  });

  test('bar chart renders axis labels', async ({ page }) => {
    await expect(page.getByText('Returns (%)')).toBeVisible();
    await expect(page.getByText('Symbols')).toBeVisible();
  });

  test('bar chart renders legend entries', async ({ page }) => {
    await expect(page.getByText('Jan 26')).toBeVisible();
    await expect(page.getByText('Feb 26')).toBeVisible();
  });

  test('bar chart renders symbol labels on y-axis', async ({ page }) => {
    const symbols = ['XAUUSD', 'EURUSD', 'GBPUSD', 'USDJPY'];
    for (const symbol of symbols) {
      await expect(page.getByText(symbol)).toBeVisible();
    }
  });

  // ── Sunburst Chart ──────────────────────────────────────────────────

  test('renders the sunburst chart card', async ({ page }) => {
    await expect(page.getByText('Sunburst Chart')).toBeVisible();
  });

  test('sunburst chart renders SVG path elements', async ({ page }) => {
    const sunburstSvg = page
      .getByText('Sunburst Chart')
      .locator('..')
      .locator('..')
      .locator('svg');

    await expect(sunburstSvg).toBeVisible();

    const paths = sunburstSvg.locator('path');
    const count = await paths.count();
    // 8 counterparties + their asset children
    expect(count).toBeGreaterThanOrEqual(16);
  });

  test('sunburst chart renders counterparty labels', async ({ page }) => {
    await expect(page.getByText('Counterparty A')).toBeVisible();
    await expect(page.getByText('Counterparty B')).toBeVisible();
  });
});
