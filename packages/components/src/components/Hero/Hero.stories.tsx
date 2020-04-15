import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Hero } from './Hero';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Hero', () => (
    <Hero>
      <Hero.Title>Full-Stack React Native Software Development</Hero.Title>
      <Hero.SubTitle>
        Hi, I’m Jon. I am a software engineer from the Pacific Northwest. I
        build mobile apps and websites for companies, startups -- and sometimes
        just for fun
      </Hero.SubTitle>
    </Hero>
  ));
