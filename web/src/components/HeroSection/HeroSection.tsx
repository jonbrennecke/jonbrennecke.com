import { Hero } from '@portfolio/components';
import React from 'react';

export interface HeroSectionProps {
  onClickContactButton(): void;
}

export const HeroSection = ({ onClickContactButton }: HeroSectionProps) => (
  <Hero>
    <Hero.Title as="h1">Hi, I’m Jon. 👋</Hero.Title>
    <Hero.SubTitle>
      I am a software engineer from the Pacific Northwest. I build mobile apps
      and websites for companies, startups—and sometimes just for fun.
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
  </Hero>
);
