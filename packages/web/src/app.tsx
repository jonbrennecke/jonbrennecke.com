import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { CaseStudies, Capabilities } from './components';
import { unit, Navigation } from '@portfolio/components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${unit * 3}px;

  & > * {
    max-width: 1024px;
    width: 100%;
  }
`;

const StyledNavigation = styled(Navigation)`
  padding: 0 ${unit * 5}px;
`;

export const App = hot(() => (
  <Container>
    <StyledNavigation>
      <Navigation.Logo />
      <Navigation.Links>
        <Navigation.Link>Home</Navigation.Link>
        <Navigation.Link>Case Studies</Navigation.Link>
        <Navigation.Link>Process</Navigation.Link>
        <Navigation.Link variant="primary">Contact</Navigation.Link>
      </Navigation.Links>
    </StyledNavigation>
    <Capabilities />
    <CaseStudies />
  </Container>
));
