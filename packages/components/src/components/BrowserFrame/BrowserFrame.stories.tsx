import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserFrame } from './BrowserFrame';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('BrowserFrame', () => (
    <BrowserFrame>
      <div />
    </BrowserFrame>
  ));
