import { storiesOf } from '@storybook/react';
import React from 'react';
import { Navigation } from './Navigation';

storiesOf('UI', module).add('Navigation', () => (
  <Navigation>
    <Navigation.MenuButton />
    <Navigation.Logo />
    <Navigation.Links>
      <Navigation.Link>Home</Navigation.Link>
      <Navigation.Link>Case Studies</Navigation.Link>
      <Navigation.Link>Process</Navigation.Link>
      <Navigation.Link variant="primary">Contact</Navigation.Link>
    </Navigation.Links>
  </Navigation>
));
