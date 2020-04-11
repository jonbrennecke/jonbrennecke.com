import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { BarkdLogo, BarkdLogoContentStyle } from './BarkdLogo';
import { trueWhite, trueBlack } from '../../styles';

const Container = styled.div<{ logoContentStyle: BarkdLogoContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${props =>
    props.logoContentStyle === BarkdLogoContentStyle.dark
      ? trueWhite
      : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

storiesOf('Logos', module)
  .addDecorator(withKnobs)
  .add('BarkdLogo', () => {
    const logoContentStyle = boolean('Dark Content Style', true)
      ? BarkdLogoContentStyle.dark
      : BarkdLogoContentStyle.light;
    return (
      <Container logoContentStyle={logoContentStyle}>
        <BarkdLogo contentStyle={logoContentStyle} />
      </Container>
    );
  });
