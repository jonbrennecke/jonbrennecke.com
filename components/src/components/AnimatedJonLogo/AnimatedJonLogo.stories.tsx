import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { AnimatedJonLogo } from './AnimatedJonLogo';
import { trueWhite, trueBlack } from '../../styles';
import { JonLogoContentStyle } from '../JonLogo';

const Container = styled.div<{ logoContentStyle: JonLogoContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${(props) =>
    props.logoContentStyle === JonLogoContentStyle.dark
      ? trueWhite
      : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

export function AnimatedJonLogoStory({ contentStyle }: { contentStyle: JonLogoContentStyle }) {
  return (
    <Container logoContentStyle={contentStyle}>
      <AnimatedJonLogo contentStyle={contentStyle} />
    </Container>
  );
}

AnimatedJonLogoStory.storyName = "Animated"

AnimatedJonLogoStory.argTypes = {
  contentStyle: {
    options: [JonLogoContentStyle.dark, JonLogoContentStyle.light],
    control: { type: 'radio' },
  }
};

export default {
  title: "Logos/Jon/Animated",
  component: AnimatedJonLogoStory,
};