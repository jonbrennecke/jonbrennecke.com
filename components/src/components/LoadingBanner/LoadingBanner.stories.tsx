import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ContentStyle } from '../../types';
import { LoadingBanner } from './LoadingBanner';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('LoadingBanner', () => (
    <LoadingBanner
      contentStyle={
        boolean('Dark Content Style', true)
          ? ContentStyle.dark
          : ContentStyle.light
      }
    />
  ));
