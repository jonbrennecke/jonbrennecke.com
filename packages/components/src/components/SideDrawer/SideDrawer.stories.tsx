import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SideDrawer } from './SideDrawer';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('SideDrawer', () => {
    return <SideDrawer open={boolean('Open', true)}></SideDrawer>;
  });
