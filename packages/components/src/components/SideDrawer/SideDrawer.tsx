import React from 'react';
import styled from 'styled-components';
import { trueBlack } from '../../styles';
import { timingFunctions } from 'polished';

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  width: 40vw;
  height: 100vh;
  background-color: ${trueBlack};
  right: 0;
  top: 0;
  transition: 0.5s ${timingFunctions('easeInOutCubic')};
  transform: translateX(${(props) => (props.open ? '0%' : '100%')});
`;

export interface SideDrawerProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
  open?: boolean;
}

export const SideDrawer = ({
  className,
  children,
  open = false,
}: SideDrawerProps) => (
  <Container open={open} className={className}>
    {children}
  </Container>
);
