import type { Meta, StoryObj } from '@storybook/nextjs';
import { Search } from 'lucide-react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Search question...' },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search...',
    icon: <Search className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
};
