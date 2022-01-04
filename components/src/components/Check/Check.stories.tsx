import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Check } from './Check';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Check', () => <Check />);
