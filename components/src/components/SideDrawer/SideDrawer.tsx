import React, { useCallback } from 'react';
import styled from 'styled-components';
import { trueBlack, trueWhite, opacity } from '../../styles';
import { timingFunctions } from 'polished';
import { useClickOutside } from './clickOutside';

export enum SideDrawerAlignment {
  right = 'right',
  left = 'left',
}

const Background = styled.div.attrs<{ open: boolean }>((props) => ({
  style: {
    opacity: props.open ? 1 : 0,
  },
}))<{ open: boolean }>`
  top: 0;
  left: 0;
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${opacity(trueWhite, 0.8)};
  pointer-events: none;
  transition: 250ms opacity ease-in-out 100ms;
`;

const Container = styled.div.attrs<{
  open: boolean;
  alignment: SideDrawerAlignment | keyof typeof SideDrawerAlignment;
}>((props) => ({
  style: {
    transform: `translateX(
       ${props.open ? '0%' : translateX[props.alignment]}
    )`,
  },
}))<{
  open: boolean;
  alignment: SideDrawerAlignment | keyof typeof SideDrawerAlignment;
}>`
  z-index: 1000;
  position: fixed;
  max-width: 768px;
  width: 60vw;
  height: 100vh;
  background-color: ${trueBlack};
  right: ${(props) => props.alignment === SideDrawerAlignment.right && '0'};
  left: ${(props) => props.alignment === SideDrawerAlignment.left && '0'};
  top: 0;
  transition: 0.5s ${timingFunctions('easeInOutCubic')};
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
  onClickOutside?(): void;
}

export const SideDrawer = ({
  className,
  children,
  open = false,
  alignment = SideDrawerAlignment.right,
  onClickOutside,
}: SideDrawerProps) => {
  const clickOutsideCallback = useCallback(() => {
    if (open && onClickOutside) {
      onClickOutside();
    }
  }, [onClickOutside, open]);
  const ref = useClickOutside(clickOutsideCallback);
  return (
    <>
      <Background open={open} />
      <Container
        ref={ref}
        alignment={alignment}
        open={open}
        className={className}
      >
        {children}
      </Container>
    </>
  );
};
