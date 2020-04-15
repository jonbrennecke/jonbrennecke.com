import { withKnobs, boolean } from '@storybook/addon-knobs';
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

storiesOf('Logos', module)
  .addDecorator(withKnobs)
  .add('AnimatedJonLogo', () => {
    const logoContentStyle = boolean('Dark Content Style', true)
      ? JonLogoContentStyle.dark
      : JonLogoContentStyle.light;
    return (
      <Container logoContentStyle={logoContentStyle}>
        <AnimatedJonLogo contentStyle={logoContentStyle} />
      </Container>
    );
  });
