import noop from 'lodash/noop';
import React from 'react';
import styled from 'styled-components';
import { trueBlack, transparent } from '../../styles';

export interface IInputProps {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  name?: React.HTMLProps<HTMLInputElement>['name'];
  type?: React.HTMLProps<HTMLInputElement>['type'];
  style?: React.HTMLProps<HTMLInputElement>['style'];
  className?: React.HTMLProps<HTMLInputElement>['className'];
  placeholderTextColor?: string;
  required?: boolean;
  onChangeValue?(value: string): void;
  onBlur?(): void;
  onFocus?(): void;
}

export interface IInputTheme {
  color: string;
  placeholderColor: string;
}

export const defaultInputPlaceholderTexColor = '#ccc';

const StyledTextInput = styled.input<{ placeholderTextColor: string }>`
  color: ${trueBlack};
  font-family: 'Cabin', sans-serif;
  font-size: 16px;
  outline: 0;
  border: 0;
  background-color: ${transparent};
  padding: 0;

  &::placeholder {
    color: ${(props) => props.placeholderTextColor};
  }
`;

export const Input = ({
  value,
  placeholder,
  style,
  className,
  name,
  type = 'text',
  placeholderTextColor = defaultInputPlaceholderTexColor,
  autoFocus = true,
  required = false,
  onChangeValue = noop,
  onBlur = noop,
  onFocus = noop,
}: IInputProps) => (
  <StyledTextInput
    placeholderTextColor={placeholderTextColor}
    className={className}
    name={name}
    style={style}
    value={value}
    type={type}
    onChange={(e) => onChangeValue(e.target.value)}
    placeholder={placeholder}
    autoFocus={autoFocus}
    onBlur={onBlur}
    onFocus={onFocus}
    required={required}
  />
);
