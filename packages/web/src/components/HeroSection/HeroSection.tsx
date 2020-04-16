import React from 'react';
import { Hero, unit, Button } from '@portfolio/components';
import styled from 'styled-components';

const StyledHero = styled(Hero)`
  padding: ${unit * 10}px ${unit * 5}px;
  height: 80vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${unit * 5}px;

  & > * {
    margin-right: ${unit * 3}px;
  }
`;

export const HeroSection = () => (
  <StyledHero>
    <Hero.Title>Custom React Native Software Development</Hero.Title>
    <Hero.SubTitle>
      Hi, I’m Jon. I am a software engineer from the Pacific Northwest. I build
      mobile apps and websites for companies, startups—and sometimes just for
      fun.
    </Hero.SubTitle>
    <ButtonGroup>
      <Button variant="primary" size="large">
        Contact
      </Button>
      <Button size="large">See Work</Button>
    </ButtonGroup>
  </StyledHero>
);
