import isString from 'lodash/isString';
import noop from 'lodash/noop';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../Text';
import {
  trueBlack,
  trueWhite,
  unit,
  transparent,
  lightTan,
  tan,
  darkGreen,
  lighten,
  offWhite,
  blue
} from '../../styles';

type ReactChild = React.ReactElement | React.ReactNode;

export interface IButtonProps {
  variant?: EButtonVariant | keyof typeof EButtonVariant;
  size?: EButtonSize | keyof typeof EButtonSize;
  children?: ReactChild | ReactChild[];
  style?: React.HTMLProps<HTMLButtonElement>['style'];
  className?: React.HTMLProps<HTMLButtonElement>['className'];
  disabled?: boolean;
  onClick?(): void;
}

export enum EButtonVariant {
  primary = 'primary',
  default = 'default'
}

export enum EButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export interface IStyledButton {
  variant: EButtonVariant | keyof typeof EButtonVariant;
  size: EButtonSize | keyof typeof EButtonSize;
  active: boolean;
  disabled: boolean;
}

const buttonPadding = (size: EButtonSize | keyof typeof EButtonSize) => {
  switch (size) {
    case EButtonSize.small:
      return css`
        padding: ${0.25 * unit}px ${unit}px;
      `;
    case EButtonSize.medium:
      return css`
        padding: ${unit}px ${2 * unit}px;
      `;
    case EButtonSize.large:
      return css`
        padding: ${2 * unit}px ${4 * unit}px;
      `;
  }
};

const backgroundColors = {
  [EButtonVariant.default]: offWhite,
  [EButtonVariant.primary]: blue
};

const textColors = {
  [EButtonVariant.default]: darkGreen,
  [EButtonVariant.primary]: trueWhite
};

const activeStyles = ({ active, variant }: IStyledButton) =>
  active
    ? css`
        background-color: ${backgroundColors[variant]};
        opacity: 0.7;
      `
    : css``;

const defaultStyles = ({ variant, size }: IStyledButton) =>
  css`
    max-width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${backgroundColors[variant]};
    border-radius: 4px;
    outline: 0;
    border-width: 0;
    cursor: pointer;
    ${buttonPadding(size)};
  `;

const disabledStyles = ({ disabled }: IStyledButton) =>
  disabled
    ? css`
        opacity: 0.5;
      `
    : css``;

const Container = styled.button<IStyledButton>`
  ${defaultStyles}
  ${activeStyles};
  ${disabledStyles};
`;

export const Button = ({
  variant = EButtonVariant.default,
  size = EButtonSize.medium,
  children,
  style,
  className,
  disabled = false,
  onClick = noop
}: IButtonProps) => {
  const [active, setActive] = useState(false);
  return (
    <Container
      className={className}
      style={style}
      size={size}
      onClick={!disabled ? onClick : noop}
      variant={variant}
      active={active}
      disabled={disabled}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {isString(children) ? (
        <Text weight="bold" color={textColors[variant]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Container>
  );
};
