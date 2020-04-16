import times from 'lodash/times';
import { timingFunctions } from 'polished';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { unit } from '../../styles';
import { Button } from '../Button';
import { Heading } from '../Heading';

const Title = styled(Heading)`
  font-size: ${unit * 8}px;
  white-space: normal;
  padding-bottom: ${unit * 3}px;
`;

const SubTitle = styled(Heading)`
  font-size: ${unit * 4}px;
  font-weight: normal;
  color: #726e84;
  white-space: normal;
  overflow: visible;
  padding-top: ${unit * 3}px;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${unit * 3}px;
  padding-top: ${unit * 6}px;
  max-width: 400px;
`;

const heroAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(${unit * 5}px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const makeNthChildAnimation = (n: number) => css`
  & > *:nth-child(${n}) {
    opacity: 0;
    animation: ${heroAnimation} 1s ${timingFunctions('easeOutQuad')} forwards
      ${4 + n * 0.2}s;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${times(5).map((n) => makeNthChildAnimation(n))}
`;

export interface HeroSubComponents {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
  ButtonGroup: typeof ButtonGroup;
  Button: typeof Button;
}

export interface HeroProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export const Hero: React.FC<HeroProps> & HeroSubComponents = ({
  children,
  className,
}: HeroProps) => <Container className={className}>{children}</Container>;

Hero.Title = Title;
Hero.SubTitle = SubTitle;
Hero.ButtonGroup = ButtonGroup;
Hero.Button = Button;
