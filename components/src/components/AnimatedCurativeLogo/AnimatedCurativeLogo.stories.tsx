import React from "react";
import styled from "styled-components";
import { trueBlack, trueWhite } from "../../styles";
import { ContentStyle } from "../../types";
import { AnimatedCurativeLogo } from "./AnimatedCurativeLogo";

const Container = styled.div<{ contentStyle: ContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${(props) =>
    props.contentStyle === ContentStyle.dark ? trueWhite : trueBlack};

  & > svg {
    display: flex;
    flex: 1;
  }
`;

export function AnimatedCurativeLogoStory({
  contentStyle = ContentStyle.dark,
}: {
  contentStyle: ContentStyle;
}) {
  return (
    <Container contentStyle={contentStyle}>
      <AnimatedCurativeLogo contentStyle={contentStyle} />
    </Container>
  );
}

AnimatedCurativeLogoStory.storyName = "Animated";

AnimatedCurativeLogoStory.argTypes = {
  contentStyle: {
    options: [ContentStyle.dark, ContentStyle.light],
    control: { type: "radio" },
  },
};

export default {
  title: "Logos/Curative/Animated",
  component: AnimatedCurativeLogoStory,
};
