import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PhoneFrame } from './PhoneFrame';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('PhoneFrame', () => <PhoneFrame />);
