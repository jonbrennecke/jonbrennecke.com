import { unit, LoadingBanner, About } from '@portfolio/components';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import {
  Capabilities,
  CaseStudies,
  Navbar,
  ServicesSection,
  HeroSection,
  FooterSection,
} from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: ${unit * 3}px; */

  & > * {
    /* max-width: 1024px; */
    width: 100%;
  }
`;

const AboutImage = styled.div`
  background-image: url(${require('../assets/images/about_image.jpg')});
  background-size: cover;
`;

export const App = hot(() => (
  <>
    <Container>
      <Navbar />
      <HeroSection />
      <CaseStudies />
      <ServicesSection />

      <About>
        <About.TextContent>
          <About.Title>About me...</About.Title>
          <About.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </About.Body>
        </About.TextContent>
        <About.ImageContent>
          <AboutImage />
        </About.ImageContent>
      </About>

      <Capabilities />
      <FooterSection />
    </Container>
    <LoadingBanner contentStyle="dark" />
  </>
));
