import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { OpenGovEmblem, OpenGovEmblemContentStyle } from './OpenGovEmblem';
import { trueWhite, trueBlack } from '../../styles';

const Container = styled.div<{ logoContentStyle: OpenGovEmblemContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${props =>
    props.logoContentStyle === OpenGovEmblemContentStyle.dark
      ? trueWhite
      : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

storiesOf('Logos', module)
  .addDecorator(withKnobs)
  .add('OpenGovEmblem', () => {
    const logoContentStyle = boolean('Dark Content Style', true)
      ? OpenGovEmblemContentStyle.dark
      : OpenGovEmblemContentStyle.light;
    return (
      <Container logoContentStyle={logoContentStyle}>
        <OpenGovEmblem contentStyle={logoContentStyle} />
      </Container>
    );
  });
