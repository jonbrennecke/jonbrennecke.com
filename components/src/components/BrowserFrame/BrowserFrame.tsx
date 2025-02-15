import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten, unit, trueWhite } from '../../styles';

const WindowControlButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  margin: 0 ${unit * 0.5}px;
`;

const windowControlRed = '#FF5A52';
const windowControlYellow = '#E5C02A';
const windowControlGreen = '#54C22C';
const windowBorderGray = '#E6E9F2';

// @ts-ignore
const makeWindowControlButton = (color: string) => styled(WindowControlButton)`
  border-color: ${darken(color, 0.2)};
  background-color: ${color};

  &:hover {
    background-color: ${darken(color, 0.35)};
    border-color: ${darken(color, 0.5)};
  }
`;

const WindowExitButton = makeWindowControlButton(windowControlRed);
const WindowMinimizeButton = makeWindowControlButton(windowControlYellow);
const WindowFullScreenButton = makeWindowControlButton(windowControlGreen);

const WindowControlButtons = styled((props) => (
  <div {...props}>
    <WindowExitButton />
    <WindowMinimizeButton />
    <WindowFullScreenButton />
  </div>
))`
  display: flex;
  flex-direction: row;
  padding: ${unit * 0.5}px 0;
`;

const ForwardArrow = (props) => (
  <svg width="7" height="11" viewBox="0 0 7 11" {...props}>
    <path
      fill={windowBorderGray}
      fillRule="evenodd"
      d="M14.875,10.5 L14.975,10.4 L13.575,9 L13.475,9.1 L9.375,5 L8,6.375 L12.1,10.475 L8.075,14.5 L9.475,15.9 L13.5,11.875 L13.6,11.975 L14.975,10.6 L14.875,10.5 Z"
      transform="translate(-8 -5)"
    />
  </svg>
);

const BackArrow = styled(ForwardArrow)`
  transform: scaleX(-1);
`;

const browserButtonStyle = css`
  display: flex;
  align-items: center;
  border: 1px solid ${windowBorderGray};
  padding: 0 ${unit}px;
  border-radius: 2px;
  margin-right: ${unit * 0.5}px;

  &:hover {
    background-color: ${lighten(windowBorderGray, 0.5)};
  }
`;

const BackArrowButton = styled((props) => (
  <div {...props}>
    <BackArrow />
  </div>
))`
  ${browserButtonStyle}
`;

const ForwardArrowButton = styled((props) => (
  <div {...props}>
    <ForwardArrow />
  </div>
))`
  ${browserButtonStyle}
`;

const SearchInput = styled.div`
  border: 1px solid ${windowBorderGray};
  display: flex;
  flex: 1;
  border-radius: 2px;
  background-color: ${lighten(windowBorderGray, 0.3)};
`;

const SearchBar = styled((props) => (
  <div {...props}>
    <BackArrowButton />
    <ForwardArrowButton />
    <SearchInput />
  </div>
))`
  max-width: 50%;
  display: flex;
  flex: 1;
  margin: 0 auto;
`;

const BrowserToolBar = styled((props) => (
  <div {...props}>
    <WindowControlButtons />
    <SearchBar />
  </div>
))`
  display: flex;
  flex-direction: row;
  padding: ${unit * 0.5}px ${unit}px;
`;

const Contents = styled.div`
  display: flex;
  flex: 1;
  background-color: ${trueWhite};
  border-top: 1px solid ${windowBorderGray};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${lighten(windowBorderGray, 0.2)};
  border: 1px solid ${windowBorderGray};
  border-radius: 2px;
`;

export interface BrowserFrameProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export const BrowserFrame = ({ className, children }: BrowserFrameProps) => (
  <Container className={className}>
    <BrowserToolBar />
    <Contents>{children}</Contents>
  </Container>
);
