import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { CaseStudies } from './components/caseStudies';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = hot(() => (
  <Container>
    <CaseStudies />
  </Container>
));
