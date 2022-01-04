import { storiesOf } from '@storybook/react';
import React from 'react';
import { Hero } from './Hero';

storiesOf('UI', module)
  .add('Hero', () => (
    <Hero>
      <Hero.Title>Full-Stack React Native Software Development</Hero.Title>
      <Hero.SubTitle>
        Hi, I’m Jon. I am a software engineer from the Pacific Northwest. I
        build mobile apps and websites for companies, startups—and sometimes
        just for fun.
      </Hero.SubTitle>
      <Hero.ButtonGroup>
        <Hero.Button variant="primary" size="large">
          Work with me
        </Hero.Button>
        <Hero.Button size="large">See more</Hero.Button>
      </Hero.ButtonGroup>
    </Hero>
  ));
