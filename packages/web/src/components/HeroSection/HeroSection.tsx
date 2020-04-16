import React from 'react';
import { Hero, unit, Button, maxWidth } from '@portfolio/components';
import styled from 'styled-components';

const StyledHero = styled(Hero)`
  padding: ${unit * 10}px ${unit * 5}px;
  height: 80vh;
  max-width: ${maxWidth}px;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${unit * 3}px;
  padding-top: ${unit * 6}px;
  max-width: 400px;
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
        Work with me
      </Button>
      {/* <Button size="large">See more</Button> */}
    </ButtonGroup>
  </StyledHero>
);
