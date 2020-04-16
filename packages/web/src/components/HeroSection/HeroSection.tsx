import React from 'react';
import { Hero, unit, maxWidth } from '@portfolio/components';
import styled from 'styled-components';

const StyledHero = styled(Hero)`
  padding: ${unit * 10}px ${unit * 5}px;
  height: 80vh;
  max-width: ${maxWidth}px;
`;

export const HeroSection = () => (
  <StyledHero>
    <Hero.Title>Custom React Native Software Development</Hero.Title>
    <Hero.SubTitle>
      Hi, I’m Jon. I am a software engineer from the Pacific Northwest. I build
      mobile apps and websites for companies, startups—and sometimes just for
      fun.
    </Hero.SubTitle>
    <Hero.ButtonGroup>
      <Hero.Button variant="primary" size="large">
        Work with me
      </Hero.Button>
      {/* <Hero.Button size="large">See more</Hero.Button> */}
    </Hero.ButtonGroup>
  </StyledHero>
);
