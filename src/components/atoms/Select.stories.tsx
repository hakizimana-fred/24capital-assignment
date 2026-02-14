import type { Meta, StoryObj } from '@storybook/nextjs';
import { Calendar } from 'lucide-react';
import { Select } from './Select';

const sampleOptions = [
  { value: '2025-08', label: 'August 2025' },
  { value: '2025-07', label: 'July 2025' },
  { value: '2025-06', label: 'June 2025' },
];

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    options: sampleOptions,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <Calendar className="h-4 w-4" />,
  },
};
