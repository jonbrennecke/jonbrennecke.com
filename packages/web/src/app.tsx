import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { CaseStudies, Capabilities } from './components';
import { unit } from '@portfolio/components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${unit * 3}px;

  & > * {
    max-width: 1024px;
  }
`;

export const App = hot(() => (
  <Container>
    <Capabilities />
    <CaseStudies />
  </Container>
));
