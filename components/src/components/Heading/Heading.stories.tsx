import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';

const Container = styled.div``;

storiesOf('UI', module).add('Heading', () => (
  <Container>
    <Heading>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo
      sed urna tincidunt condimentum.
    </Heading>
  </Container>
));
