import { unit, LoadingBanner } from '@portfolio/components';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import {
  Capabilities,
  CaseStudies,
  Navbar,
  ServicesSection,
  HeroSection,
} from './components';

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

export const App = hot(() => (
  <>
    <Container>
      <Navbar />
      <HeroSection />
      <CaseStudies />
      <ServicesSection />
      <Capabilities />
    </Container>
    <LoadingBanner contentStyle="dark" />
  </>
));
