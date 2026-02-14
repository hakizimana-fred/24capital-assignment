import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const MinorWarning: Story = {
  args: { variant: 'minor-warning' },
};

export const MajorWarning: Story = {
  args: { variant: 'major-warning' },
};

export const NoWarning: Story = {
  args: { variant: 'no-warning' },
};

export const Completed: Story = {
  args: { variant: 'completed' },
};

export const Pending: Story = {
  args: { variant: 'pending' },
};

export const CustomLabel: Story = {
  args: { variant: 'completed', label: 'Approved' },
};
