import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { About } from './About';

const Image = styled.div`
  background-color: blue;
`;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('About', () => (
    <About>
      <About.TextContent>
        <About.Title>About me...</About.Title>
        <About.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </About.Body>
      </About.TextContent>
      <About.ImageContent>
        <Image />
      </About.ImageContent>
    </About>
  ));
