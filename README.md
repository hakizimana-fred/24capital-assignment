# 24 Capital — Fund Due Diligence Dashboard

A financial dashboard application for reviewing fund progression and investment portfolio analytics. Built with Next.js and React, the application provides question-based due diligence workflows, multi-format charting, and structured navigation across Dashboard, Reports, and Analytics views.

## Tech Stack

| Category        | Technology                                                    |
| --------------- | ------------------------------------------------------------- |
| Framework       | [Next.js](https://nextjs.org) 16 (App Router)                |
| Language        | [TypeScript](https://www.typescriptlang.org) 5 (strict mode) |
| Styling         | [Tailwind CSS](https://tailwindcss.com) 4                    |
| Charts          | [Recharts](https://recharts.org) 3, D3 (hierarchy, shape)    |
| Testing         | [Playwright](https://playwright.dev) (end-to-end)            |
| Component Dev   | [Storybook](https://storybook.js.org) 10                     |
| Linting         | ESLint, Prettier                                              |
| Git Hooks       | Husky, Commitlint (Conventional Commits)                      |
| Icons           | Lucide React                                                  |

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Plus Jakarta Sans font)
│   ├── page.tsx                  # Home — Fund Progression dashboard
│   ├── analytics/
│   │   └── page.tsx              # Analytics route
│   └── reports/
│       └── page.tsx              # Reports route
│
├── components/
│   ├── atoms/                    # Base UI primitives
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── RadioGroup.tsx
│   │   ├── Select.tsx
│   │   ├── StatusIcon.tsx
│   │   ├── Text.tsx
│   │   ├── Textarea.tsx
│   │   └── index.ts              # Barrel export
│   ├── molecules/                # Composite components
│   │   ├── FilterBar.tsx
│   │   ├── FundTab.tsx
│   │   ├── PeriodSelector.tsx
│   │   ├── QuestionRow.tsx
│   │   ├── SectionHeader.tsx
│   │   └── SidebarNavItem.tsx
│   ├── organisms/                # Feature-level components
│   │   ├── charts/
│   │   │   ├── BarChartCard.tsx
│   │   │   ├── HorizontalBarChart.tsx
│   │   │   ├── LineChartCard.tsx
│   │   │   ├── MultiLineChart.tsx
│   │   │   ├── PieChartCard.tsx
│   │   │   ├── ReusablePieChart.tsx
│   │   │   ├── ReusableSunburstChart.tsx
│   │   │   ├── SunburstChart.tsx
│   │   │   └── SunburstChartCard.tsx
│   │   ├── FundTable.tsx
│   │   ├── FundTabs.tsx
│   │   ├── PageHeader.tsx
│   │   ├── QuestionDetailModal.tsx
│   │   └── Sidebar.tsx
│   ├── templates/                # Page-level layout templates
│   │   ├── AnalyticsTemplate.tsx
│   │   ├── FundProgressionTemplate.tsx
│   │   └── ReportsTemplate.tsx
│   └── layouts/
│       └── DashboardLayout.tsx   # Sidebar + content wrapper
│
├── data/                         # Mock data modules
│   ├── charts.ts
│   ├── funds.ts
│   ├── navigation.ts
│   ├── questionDetails.ts
│   └── reports.ts
│
├── design-system/
│   └── tokens/                   # Design tokens (colors, spacing, typography, shadows, radius)
│
├── hooks/
│   └── useModal.ts               # Modal state management hook
│
├── lib/
│   └── cn.ts                     # clsx + tailwind-merge utility
│
└── types/
    └── index.ts                  # Shared TypeScript type definitions

e2e/                              # Playwright end-to-end tests
├── navigation.spec.ts
├── chart-interactions.spec.ts
└── reports-charts.spec.ts

.storybook/                       # Storybook configuration
├── main.ts
└── preview.ts
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application starts at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Storybook

Storybook is configured with the `@storybook/nextjs` framework integration, providing a development environment for building and documenting UI components in isolation.

### Configuration

- **Framework:** `@storybook/nextjs` — renders components within the Next.js runtime, ensuring consistent behavior with the production app.
- **Addons:**
  - `@storybook/addon-docs` — auto-generates documentation pages from component props via `react-docgen-typescript`.
  - `@storybook/addon-a11y` — runs accessibility audits (axe-core) against each story.
- **Story discovery:** all `*.stories.tsx` files under `src/`.
- **Global styles:** `globals.css` is imported in `.storybook/preview.ts`, so stories render with the full design system.

### Existing Stories

Stories are co-located with their components. Current coverage includes atoms (`Badge`, `Button`, `Card`, `Input`, `Select`, `Text`), the `FilterBar` molecule, and the `ReusablePieChart` organism.

### Running Storybook

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006).

To generate a static Storybook build:

```bash
npm run build-storybook
```

## Testing

End-to-end tests are implemented with Playwright and located in the `e2e/` directory.

### Configuration

- **Browser:** Chromium (Desktop Chrome profile).
- **Base URL:** `http://localhost:3000`.
- **Dev server:** Playwright automatically starts the Next.js dev server before running tests.
- **Artifacts:** screenshots captured on failure; traces recorded on first retry.
- **CI behavior:** sequential execution (1 worker), 2 retries. Locally, tests run in parallel with no retries.
- **Reports:** HTML report output to `e2e/playwright-report/`.

### Test Suites

| File                        | Coverage                                                 |
| --------------------------- | -------------------------------------------------------- |
| `navigation.spec.ts`        | Sidebar routing, active states, nav group rendering      |
| `chart-interactions.spec.ts`| Pie/bar tooltip display, sunburst hover behavior         |
| `reports-charts.spec.ts`    | Chart card visibility, data labels, axis rendering       |

### Running Tests

```bash
# Headless (default)
npm run test:e2e

# Interactive UI mode
npm run test:e2e:ui

# Headed browser
npm run test:e2e:headed
```

## Tooling

### Charts

[Recharts](https://recharts.org) provides the charting primitives (pie, bar, line) as composable React components built on top of D3. For hierarchical visualizations, the sunburst chart is built directly with `d3-hierarchy` and `d3-shape` for partition layouts and arc generation.

### TypeScript

The project enforces strict mode with path aliases (`@/*` mapped to `src/*`). Shared type definitions live in `src/types/index.ts`, covering fund data, chart payloads, navigation, and modal interfaces.

### Tailwind CSS

Tailwind 4 is configured with a custom design token layer including brand colors, a 10-color chart palette, extended spacing, sidebar/header dimensions, and animation keyframes for chart transitions (`pie-fill`, `bar-grow`, `fade-in-up`). The `cn()` utility (`clsx` + `tailwind-merge`) handles conditional and conflict-free class composition.

### Next.js

Next.js 16 with the App Router serves as the application framework. Routes are file-based under `src/app/`. The root layout loads the Plus Jakarta Sans font via `next/font/google` and wraps all pages in a shared `DashboardLayout` shell providing the sidebar and content area.

## Linting and Formatting

```bash
# ESLint
npm run lint

# Prettier
npm run prettier
```

Husky runs Commitlint on commit messages, enforcing the [Conventional Commits](https://www.conventionalcommits.org) specification.
