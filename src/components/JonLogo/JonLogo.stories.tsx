import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { JonLogo, JonLogoContentStyle } from './JonLogo';
import { trueWhite, trueBlack } from '../../styles';

const Container = styled.div<{ logoContentStyle: JonLogoContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${props =>
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
  .add('JonLogo', () => {
    const logoContentStyle = boolean('Dark Content Style', true)
      ? JonLogoContentStyle.dark
      : JonLogoContentStyle.light;
    return (
      <Container logoContentStyle={logoContentStyle}>
        <JonLogo contentStyle={logoContentStyle} />
      </Container>
    );
  });
