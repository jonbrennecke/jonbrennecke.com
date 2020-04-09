import React from 'react';
import { Text, ITextProps } from '../Text';
import styled from 'styled-components';

const StyledText = styled(Text)`
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export interface IHeadingProps {
  children?: ITextProps['children'];
  style?: ITextProps['style'];
  className?: ITextProps['className'];
}

export const Heading = ({ children, style, className }: IHeadingProps) => (
  <StyledText weight="bold" style={style} className={className}>
    {children}
  </StyledText>
);
