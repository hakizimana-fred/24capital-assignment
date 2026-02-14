import type { Meta, StoryObj } from '@storybook/nextjs';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: { variant: 'heading-1' },
};

export const Heading2: Story = {
  args: { variant: 'heading-2' },
};

export const Heading3: Story = {
  args: { variant: 'heading-3' },
};

export const Heading4: Story = {
  args: { variant: 'heading-4' },
};

export const Body: Story = {
  args: { variant: 'body' },
};

export const BodySmall: Story = {
  args: { variant: 'body-sm' },
};

export const Caption: Story = {
  args: { variant: 'caption' },
};

export const Label: Story = {
  args: { variant: 'label', children: 'Label text' },
};

export const Overline: Story = {
  args: { variant: 'overline', children: 'Overline text' },
};
