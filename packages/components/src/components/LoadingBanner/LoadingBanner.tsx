import React from 'react';
import styled, { keyframes } from 'styled-components';
import { trueBlack, trueWhite } from '../../styles';
import { AnimatedJonLogo } from '../AnimatedJonLogo';
import { JonLogoContentStyle } from '../JonLogo';
import { timingFunctions } from 'polished';

export enum LoadingBannerContentStyle {
  dark = 'dark',
  light = 'light',
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
  contentStyle:
    | LoadingBannerContentStyle
    | keyof typeof LoadingBannerContentStyle;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.contentStyle === LoadingBannerContentStyle.light
      ? trueWhite
      : trueBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${drawerAnimation} 0.5s ${timingFunctions('easeInOutCubic')}
    forwards 3s;

  & > * {
    animation: ${drawerChildrenAnimation} 1s ease forwards 2.5s;
  }
`;

const StyledAnimatedJonLogo = styled(AnimatedJonLogo)`
  max-width: 320px;
  width: 100%;
`;

export interface LoadingBannerProps {
  contentStyle?:
    | LoadingBannerContentStyle
    | keyof typeof LoadingBannerContentStyle;
}

const logoContentStyle = (
  contentStyle:
    | LoadingBannerContentStyle
    | keyof typeof LoadingBannerContentStyle
): JonLogoContentStyle => {
  switch (contentStyle) {
    case LoadingBannerContentStyle.dark:
      return JonLogoContentStyle.light;
    default:
      return JonLogoContentStyle.dark;
  }
};

export const LoadingBanner = ({
  contentStyle = LoadingBannerContentStyle.light,
}: LoadingBannerProps) => (
  <Container contentStyle={contentStyle}>
    <StyledAnimatedJonLogo contentStyle={logoContentStyle(contentStyle)} />
  </Container>
);
