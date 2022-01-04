import React from 'react';
import styled from 'styled-components';
import { trueBlack, trueWhite } from '../../styles';
import { BarkdLogo, BarkdLogoContentStyle } from './BarkdLogo';

const Container = styled.div<{ logoContentStyle: BarkdLogoContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${(props) =>
    props.logoContentStyle === BarkdLogoContentStyle.dark
      ? trueWhite
      : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

export function BarkdLogoStory({
  contentStyle,
}: {
  contentStyle: BarkdLogoContentStyle;
}) {
  return (
    <Container logoContentStyle={contentStyle}>
      <BarkdLogo contentStyle={contentStyle} />
    </Container>
  );
}

BarkdLogoStory.storyName = 'Barkd';

BarkdLogoStory.argTypes = {
  contentStyle: {
    options: [BarkdLogoContentStyle.dark, BarkdLogoContentStyle.light],
    control: { type: 'radio' },
  },
};

export default {
  title: 'Logos/Barkd',
  component: BarkdLogoStory,
};
