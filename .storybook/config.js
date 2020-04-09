import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(ts|tsx|js)$/), module);
