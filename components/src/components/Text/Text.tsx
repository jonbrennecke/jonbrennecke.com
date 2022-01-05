import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
  font-family: 'Cabin', sans-serif;
  font-weight: ${(props) => textWeightToFontWeight(props.weight)};
  font-size: 16px;
`;

const CabinRegularTTF = '../../../assets/fonts/Cabin/Cabin-Regular.ttf';
const CabinBoldTTF = '../../../assets/fonts/Cabin/Cabin-Bold.ttf';
const CabinMediumTTF = '../../../assets/fonts/Cabin/Cabin-Medium.ttf';

const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cabin';
    src: url(${CabinRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cabin';
    src: url(${CabinMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cabin';
    src: url(${CabinBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;

export const Text = ({
  children,
  color = trueBlack,
  weight = ETextWeight.regular,
  ...etc
}: ITextProps) => (
  <StyledSpan color={color} weight={weight} {...etc}>
    <GlobalFontStyle />
    {children}
  </StyledSpan>
);
