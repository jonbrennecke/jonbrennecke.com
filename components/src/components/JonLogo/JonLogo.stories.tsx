import React from "react";
import styled from "styled-components";
import { trueBlack, trueWhite } from "../../styles";
import { ContentStyle } from "../../types";
import { JonLogo } from "./JonLogo";

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

export function JonLogoStory({
  logoContentStyle = ContentStyle.light,
}: {
  logoContentStyle: ContentStyle;
}) {
  return (
    <Container logoContentStyle={logoContentStyle}>
      <JonLogo contentStyle={logoContentStyle} />
    </Container>
  );
}

JonLogoStory.storyName = "Standard";

JonLogoStory.argTypes = {
  contentStyle: {
    options: [ContentStyle.dark, ContentStyle.light],
    control: { type: "radio" },
  },
};

export default {
  title: "Logos/Jon/Standard",
  component: JonLogoStory,
};
