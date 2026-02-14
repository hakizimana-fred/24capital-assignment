import { definePreview } from '@storybook/nextjs';
import addonDocs from '@storybook/addon-docs';
import addonA11y from '@storybook/addon-a11y';

import '../src/app/globals.css';

export default definePreview({
  addons: [addonDocs(), addonA11y()],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
});
