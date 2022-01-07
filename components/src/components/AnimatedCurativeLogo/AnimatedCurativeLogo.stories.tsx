import React from "react";
import { ContentStyle } from "../../types";
import { AnimatedCurativeLogo } from "./AnimatedCurativeLogo";

export function AnimatedCurativeLogoStory({
  contentStyle = ContentStyle.dark,
}: {
  contentStyle: ContentStyle;
}) {
  return <AnimatedCurativeLogo contentStyle={contentStyle} />;
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
