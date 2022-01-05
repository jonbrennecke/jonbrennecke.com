import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SideDrawer, SideDrawerAlignment } from './SideDrawer';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('SideDrawer', () => (
    <SideDrawer
      alignment={select(
        'Alignment',
        {
          Right: SideDrawerAlignment.right,
          Left: SideDrawerAlignment.left,
        },
        SideDrawerAlignment.left
      )}
      open={boolean('Open', true)}
      onClickOutside={() => console.log('click outside')}
    ></SideDrawer>
  ));
