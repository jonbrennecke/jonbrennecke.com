import React from 'react';
import styled from 'styled-components';
import { trueBlack, trueWhite } from '../../styles';
import { BarkdLogo, BarkdLogoContentStyle } from './BarkdLogo';

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

function BarkdLogoStory({ contentStyle }: { contentStyle: BarkdLogoContentStyle }) {
    return (
      <Container logoContentStyle={contentStyle}>
        <BarkdLogo contentStyle={contentStyle} />
      </Container>
    );
}

export const BarkdLogoStoryWithControls = (args) => <BarkdLogoStory { ...args} />

BarkdLogoStory.argTypes = {
  contentStyle: {
    options: [BarkdLogoContentStyle.dark, BarkdLogoContentStyle.light],
    control: { type: 'radio' },
  }
};

export default {
  title: "Logos/BarkdLogo",
  component: BarkdLogoStory,
};
