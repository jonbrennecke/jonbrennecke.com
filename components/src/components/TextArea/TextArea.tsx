import noop from 'lodash/noop';
import React from 'react';
import styled from 'styled-components';
import { transparent, trueBlack } from '../../styles';
import { defaultInputPlaceholderTexColor } from '../Input';

export interface ITextAreaProps {
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  style?: React.HTMLProps<HTMLInputElement>['style'];
  className?: React.HTMLProps<HTMLInputElement>['className'];
  placeholderTextColor?: string;
  onChangeValue?(value: string): void;
  onBlur?(): void;
  onFocus?(): void;
}

const StyledTextArea = styled.textarea<{ placeholderTextColor: string }>`
  color: ${trueBlack};
  font-family: 'Red Hat Text', sans-serif;
  font-size: 16px;
  outline: 0;
  border: 0;
  background-color: ${transparent};
  padding: 0;
  resize: none;
  width: 100%;
  height: 100%;

  &::placeholder {
    color: ${(props) => props.placeholderTextColor};
  }
`;

export const TextArea = ({
  value,
  placeholder,
  style,
  className,
  placeholderTextColor = defaultInputPlaceholderTexColor,
  autoFocus = true,
  onChangeValue = noop,
  onBlur = noop,
  onFocus = noop,
}: ITextAreaProps) => (
  <StyledTextArea
    placeholderTextColor={placeholderTextColor}
    className={className}
    style={style}
    value={value}
    onChange={(e) => onChangeValue(e.target.value)}
    placeholder={placeholder}
    autoFocus={autoFocus}
    onBlur={onBlur}
    onFocus={onFocus}
  />
);
