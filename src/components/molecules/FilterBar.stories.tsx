import type { Meta, StoryObj } from '@storybook/nextjs';
import { FilterBar } from './FilterBar';

const sectionOptions = [
  { value: 'all', label: 'All Sections' },
  { value: '1', label: 'Section 1' },
  { value: '2', label: 'Section 2' },
  { value: '3', label: 'Section 3' },
];

const meta: Meta<typeof FilterBar> = {
  title: 'Molecules/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    activeFilter: 'all',
    searchQuery: '',
    sectionOptions,
    selectedSection: 'all',
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {};

export const WithActiveFilter: Story = {
  args: { activeFilter: 'pending' },
};

export const WithSearch: Story = {
  args: { searchQuery: 'annual report' },
};
