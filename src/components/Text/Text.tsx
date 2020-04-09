import React from 'react';
import styled from 'styled-components';
import { trueBlack } from '../../styles';

type ReactChild = React.ReactElement | React.ReactNode;

export enum ETextWeight {
  bold = 'bold',
  medium = 'medium',
  regular = 'regular',
}

export type ITextProps = {
  children?: ReactChild | ReactChild[];
  color?: string;
  weight?: ETextWeight | keyof typeof ETextWeight;
} & React.HTMLAttributes<{}>;

const textWeightToFontWeight = (
  weight: ETextWeight | keyof typeof ETextWeight
) =>
  ({
    [ETextWeight.bold]: '700',
    [ETextWeight.medium]: '500',
    [ETextWeight.regular]: 'normal',
  }[weight]);

const StyledSpan = styled.span<{
  color: string;
  weight: ETextWeight | keyof typeof ETextWeight;
}>`
  color: ${(props) => props.color};
  font-family: 'Red Hat Text', sans-serif;
  font-weight: ${(props) => textWeightToFontWeight(props.weight)};
  font-size: 16px;
`;

export const Text = ({
  children,
  color = trueBlack,
  weight = ETextWeight.regular,
  ...etc
}: ITextProps) => (
  <StyledSpan color={color} weight={weight} {...etc}>
    {children}
  </StyledSpan>
);
