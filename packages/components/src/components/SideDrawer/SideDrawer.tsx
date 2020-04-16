import React from 'react';
import styled from 'styled-components';
import { trueBlack } from '../../styles';
import { timingFunctions } from 'polished';

export enum SideDrawerAlignment {
  right = 'right',
  left = 'left',
}

const Container = styled.div<{
  open: boolean;
  alignment: SideDrawerAlignment | keyof typeof SideDrawerAlignment;
}>`
  z-index: 1000;
  position: fixed;
  width: 60vw;
  height: 100vh;
  background-color: ${trueBlack};
  right: ${(props) => props.alignment === SideDrawerAlignment.right && '0'};
  left: ${(props) => props.alignment === SideDrawerAlignment.left && '0'};
  top: 0;
  transition: 0.5s ${timingFunctions('easeInOutCubic')};
  transform: translateX(
    ${(props) => (props.open ? '0%' : translateX[props.alignment])}
  );
`;

const translateX = {
  [SideDrawerAlignment.right]: '100%',
  [SideDrawerAlignment.left]: '-100%',
};

export interface SideDrawerProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
  open?: boolean;
  alignment?: SideDrawerAlignment | keyof typeof SideDrawerAlignment;
}

export const SideDrawer = ({
  className,
  children,
  open = false,
  alignment = SideDrawerAlignment.right,
}: SideDrawerProps) => (
  <Container alignment={alignment} open={open} className={className}>
    {children}
  </Container>
);
