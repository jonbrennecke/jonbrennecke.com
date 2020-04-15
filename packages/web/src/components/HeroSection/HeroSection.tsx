import React from 'react';
import { Hero, unit } from '@portfolio/components';
import styled from 'styled-components';

const StyledHero = styled(Hero)`
  padding: ${unit * 10}px ${unit * 5}px;
  height: 70vh;
`;

export const HeroSection = () => (
  <StyledHero>
    <Hero.Title>Full-Stack React Native Software Development</Hero.Title>
    <Hero.SubTitle>
      Hi, I’m Jon. I am a software engineer from the Pacific Northwest. I build
      mobile apps and websites for companies, startups -- and sometimes just for
      fun.
    </Hero.SubTitle>
  </StyledHero>
);
