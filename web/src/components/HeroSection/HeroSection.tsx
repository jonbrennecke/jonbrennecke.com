import React from 'react';
import { Hero, unit, maxWidth } from '@portfolio/components';
import styled from 'styled-components';

const StyledHero = styled(Hero)`
  padding: ${unit * 10}px ${unit * 5}px;
  height: 80vh;
  max-width: ${maxWidth}px;
`;

export interface HeroSectionProps {
  onClickContactButton(): void;
}

export const HeroSection = ({ onClickContactButton }: HeroSectionProps) => (
  <StyledHero>
    <Hero.Title>Fullstack Software Development</Hero.Title>
    <Hero.SubTitle>
      Hi, I’m Jon. I am a software engineer from the Pacific Northwest. I build
      mobile apps and websites for companies, startups—and sometimes just for
      fun.
    </Hero.SubTitle>
    <Hero.ButtonGroup>
      <Hero.Button
        variant="primary"
        size="large"
        onClick={onClickContactButton}
      >
        Work with me
      </Hero.Button>
    </Hero.ButtonGroup>
  </StyledHero>
);
