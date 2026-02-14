import type { Meta, StoryObj } from '@storybook/nextjs';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'Card content goes here',
    style: { padding: '24px', minWidth: '300px' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Hover: Story = {
  args: { hover: true },
};

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px', fontWeight: 600 }}>Card Title</h3>
        <p style={{ margin: 0, color: '#4A5568', fontSize: '14px' }}>
          This card contains richer content to demonstrate the container component.
        </p>
      </div>
    ),
  },
};
