import React from 'react';
import styled from 'styled-components';
import { trueBlack, trueWhite } from '../../styles';
import { AnimatedJonLogo } from '../AnimatedJonLogo';
import { JonLogoContentStyle } from '../JonLogo';

export enum LoadingBannerContentStyle {
  dark = 'dark',
  light = 'light',
}

const Container = styled.div<{
  contentStyle:
    | LoadingBannerContentStyle
    | keyof typeof LoadingBannerContentStyle;
}>`
  position: absolute;
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
