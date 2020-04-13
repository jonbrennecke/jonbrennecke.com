import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { OpenGovLogo, OpenGovLogoContentStyle } from './OpenGovLogo';
import { trueWhite, trueBlack } from '../../styles';

const Container = styled.div<{ logoContentStyle: OpenGovLogoContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${props =>
    props.logoContentStyle === OpenGovLogoContentStyle.dark
      ? trueWhite
      : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

storiesOf('Logos', module)
  .addDecorator(withKnobs)
  .add('OpenGovLogo', () => {
    const logoContentStyle = boolean('Dark Content Style', true)
      ? OpenGovLogoContentStyle.dark
      : OpenGovLogoContentStyle.light;
    return (
      <Container logoContentStyle={logoContentStyle}>
        <OpenGovLogo contentStyle={logoContentStyle} />
      </Container>
    );
  });
