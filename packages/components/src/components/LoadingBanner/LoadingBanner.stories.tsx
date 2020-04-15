import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { LoadingBannerContentStyle, LoadingBanner } from './LoadingBanner';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('LoadingBanner', () => (
    <LoadingBanner
      contentStyle={
        boolean('Dark Content Style', true)
          ? LoadingBannerContentStyle.dark
          : LoadingBannerContentStyle.light
      }
    />
  ));
