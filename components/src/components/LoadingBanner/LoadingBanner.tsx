import React from "react";
import styled, { keyframes } from "styled-components";
import { trueBlack, trueWhite } from "../../styles";
import { ContentStyle } from "../../types";
import { AnimatedJonLogo } from "../AnimatedJonLogo";
import { timingFunctions } from "polished";
import { AnimatedCurativeLogo } from "../AnimatedCurativeLogo";

export enum LoadingBannerLogoVariant {
  jon = "jon",
  curative = "curative",
}

const drawerAnimation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
`;

const drawerChildrenAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0.1;
    transform: scale(0.66);
  }
`;

const Container = styled.div<{
  contentStyle: ContentStyle | keyof typeof ContentStyle;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.contentStyle === ContentStyle.light ? trueWhite : trueBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${drawerAnimation} 0.5s ${timingFunctions("easeInOutCubic")}
    forwards 3s;

  & > * {
    animation: ${drawerChildrenAnimation} 1s ease forwards 2.5s;
  }
`;

const StyledAnimatedJonLogo = styled(AnimatedJonLogo)`
  max-width: 320px;
  width: 100%;
`;

const StyledAnimatedCurativeLogo = styled(AnimatedCurativeLogo)`
  max-width: 500px;
  width: 100%;
`;

const invertContentStyle = (
  contentStyle: ContentStyle | keyof typeof ContentStyle
): ContentStyle => {
  switch (contentStyle) {
    case ContentStyle.dark:
      return ContentStyle.light;
    default:
      return ContentStyle.dark;
  }
};

export interface LoadingBannerProps {
  contentStyle?: ContentStyle | keyof typeof ContentStyle;
  logo?: LoadingBannerLogoVariant | keyof typeof LoadingBannerLogoVariant;
}

export const LoadingBanner = ({
  contentStyle = ContentStyle.light,
  logo = LoadingBannerLogoVariant.jon,
}: LoadingBannerProps) => (
  <Container contentStyle={contentStyle}>
    {logo === LoadingBannerLogoVariant.curative ? (
      <StyledAnimatedCurativeLogo
        contentStyle={invertContentStyle(contentStyle)}
      />
    ) : (
      <StyledAnimatedJonLogo contentStyle={invertContentStyle(contentStyle)} />
    )}
  </Container>
);
