import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Footer } from './Footer';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Footer', () => (
    <Footer>
      <Footer.Logo />
      <Footer.FootNotes>
        <Footer.FootNote>
          © 2020 - Jon Brennecke. All Rights Reserved.
        </Footer.FootNote>
        <Footer.FootNote>This website is open-source on GitHub</Footer.FootNote>
        <Footer.FootNote>Made with ❤ in Coeur d'Alene, Idaho</Footer.FootNote>
      </Footer.FootNotes>
    </Footer>
  ));