import type { Meta, StoryObj } from '@storybook/nextjs';
import { ReusablePieChart } from './ReusablePieChart';
import { counterpartyPieData } from '@/data/reports';

const meta: Meta<typeof ReusablePieChart> = {
  title: 'Organisms/Charts/ReusablePieChart',
  component: ReusablePieChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 500 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ReusablePieChart>;

export const Default: Story = {
  args: {
    title: 'Company Balance by Counterparty',
    data: counterpartyPieData,
  },
};

export const Donut: Story = {
  args: {
    title: 'Allocation (Donut)',
    data: counterpartyPieData,
    innerRadius: 60,
    outerRadius: 100,
  },
};

export const NoLabels: Story = {
  args: {
    title: 'Without Labels',
    data: counterpartyPieData,
    showLabels: false,
  },
};
