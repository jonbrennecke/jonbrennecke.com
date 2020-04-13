import React from 'react';
import { Text, ITextProps } from '../Text';
import styled from 'styled-components';
import { trueWhite, unit } from '../../styles';

const Arrow = styled(props => (
  <svg viewBox="0 0 102 85" {...props}>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Artboard"
        transform="translate(-59.000000, -51.000000)"
        fill="#FFFFFF"
      >
        <g id="Group" transform="translate(59.000000, 51.000000)">
          <polygon
            id="Path"
            points="73.4063316 34.9869901 0 34.9869901 0 50.0130092 73.4063316 50.0130092 49.1877684 74.3749997 59.7502177 85 102 42.4999996 96.7187753 37.1875002 59.7502177 0 49.1877684 10.6250003"
          ></polygon>
        </g>
      </g>
    </g>
  </svg>
))`
  width: 0.75em;
  margin-left: 0.28em;
`;

const Inner = styled.div`
  position: relative;
`;

const StyledText = styled(Text)`
  color: ${trueWhite};
  padding-bottom: ${unit * 0.5}px;
  display: inline-block;
`;

const Underline = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${trueWhite};
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;

  ${Arrow} {
    transition: 200ms transform ease-in-out;
  }

  &:hover ${Arrow} {
    transform: translateX(${unit}px);
  }
`;

export interface ViewButtonProps {
  children: ITextProps['children'];
  className?: string;
}

export const ViewButton = ({ className, children }: ViewButtonProps) => (
  <Container className={className}>
    <Inner>
      <StyledText>{children}</StyledText>
      <Arrow />
      <Underline />
    </Inner>
  </Container>
);
