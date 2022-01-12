import isString from "lodash/isString";
import noop from "lodash/noop";
import { rgba } from "polished";
import React from "react";
import styled, { css } from "styled-components";
import { darkGreen, offWhite, trueBlack, trueWhite, unit } from "../../styles";
import { Text } from "../Text";

type ReactChild = React.ReactElement | React.ReactNode;

export interface IButtonProps {
  variant?: EButtonVariant | keyof typeof EButtonVariant;
  size?: EButtonSize | keyof typeof EButtonSize;
  children?: ReactChild | ReactChild[];
  style?: React.HTMLProps<HTMLButtonElement>["style"];
  className?: React.HTMLProps<HTMLButtonElement>["className"];
  disabled?: boolean;
  onClick?(): void;
}

export enum EButtonVariant {
  primary = "primary",
  default = "default",
}

export enum EButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  extraLarge = "extraLarge",
}

export interface IStyledButton {
  variant: EButtonVariant | keyof typeof EButtonVariant;
  size: EButtonSize | keyof typeof EButtonSize;
  disabled: boolean;
}

export const buttonBackgroundColors = {
  [EButtonVariant.default]: offWhite,
  [EButtonVariant.primary]: trueBlack,
};

export const buttonTextColors = {
  [EButtonVariant.default]: darkGreen,
  [EButtonVariant.primary]: trueWhite,
};

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
    case EButtonSize.extraLarge:
      return css`
        padding: ${3 * unit}px ${5 * unit}px;
      `;
  }
};

const defaultStyles = ({ variant, size }: IStyledButton) =>
  css`
    max-width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${rgba(buttonBackgroundColors[variant], 0.5)};
    border-radius: 8px;
    outline: 0;
    border-width: 0;
    cursor: pointer;
    ${buttonPadding(size)};

    &:active {
      opacity: 0.7;
    }
  `;

const disabledStyles = ({ disabled }: IStyledButton) =>
  disabled
    ? css`
        opacity: 0.5;
      `
    : css``;

const Container = styled.button<IStyledButton>`
  ${defaultStyles}
  ${disabledStyles};
`;

export const Button = ({
  variant = EButtonVariant.default,
  size = EButtonSize.medium,
  children,
  style,
  className,
  disabled = false,
  onClick = noop,
}: IButtonProps) => (
  <Container
    className={className}
    style={style}
    size={size}
    onClick={!disabled ? onClick : noop}
    variant={variant}
    disabled={disabled}
  >
    {isString(children) ? (
      <Text weight="bold" color={buttonTextColors[variant]}>
        {children}
      </Text>
    ) : (
      children
    )}
  </Container>
);
