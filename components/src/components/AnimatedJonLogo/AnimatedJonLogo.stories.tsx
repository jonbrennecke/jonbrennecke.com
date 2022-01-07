import React from "react";
import styled from "styled-components";
import { trueBlack, trueWhite } from "../../styles";
import { ContentStyle } from "../../types";
import { AnimatedJonLogo } from "./AnimatedJonLogo";

const Container = styled.div<{ logoContentStyle: ContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${(props) =>
    props.logoContentStyle === ContentStyle.dark ? trueWhite : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

export function AnimatedJonLogoStory({
  contentStyle,
}: {
  contentStyle: ContentStyle;
}) {
  return (
    <Container logoContentStyle={contentStyle}>
      <AnimatedJonLogo contentStyle={contentStyle} />
    </Container>
  );
}

AnimatedJonLogoStory.storyName = "Animated";

AnimatedJonLogoStory.argTypes = {
  contentStyle: {
    options: [ContentStyle.dark, ContentStyle.light],
    control: { type: "radio" },
  },
};

export default {
  title: "Logos/Jon/Animated",
  component: AnimatedJonLogoStory,
};
