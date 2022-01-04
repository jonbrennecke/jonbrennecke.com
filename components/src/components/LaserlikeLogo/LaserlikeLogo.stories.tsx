import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { LaserlikeLogo, LaserlikeLogoContentStyle } from './LaserlikeLogo';
import { trueWhite, trueBlack } from '../../styles';

const Container = styled.div<{ logoContentStyle: LaserlikeLogoContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${props =>
    props.logoContentStyle === LaserlikeLogoContentStyle.dark
      ? trueWhite
      : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

storiesOf('Logos', module)
  .addDecorator(withKnobs)
  .add('LaserlikeLogo', () => {
    const logoContentStyle = boolean('Dark Content Style', true)
      ? LaserlikeLogoContentStyle.dark
      : LaserlikeLogoContentStyle.light;
    return (
      <Container logoContentStyle={logoContentStyle}>
        <LaserlikeLogo contentStyle={logoContentStyle} />
      </Container>
    );
  });
