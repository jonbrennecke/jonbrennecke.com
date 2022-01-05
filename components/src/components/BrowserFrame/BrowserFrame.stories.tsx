import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserFrame } from './BrowserFrame';

storiesOf('UI', module).add('BrowserFrame', () => (
  <BrowserFrame>
    <div />
  </BrowserFrame>
));
