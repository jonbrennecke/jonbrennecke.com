import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { unit } from '../../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(Heading)`
  font-size: ${unit * 10}px;
  white-space: normal;
`;

const SubTitle = styled(Heading)`
  font-size: ${unit * 5}px;
  font-weight: normal;
  color: #726e84;
  white-space: normal;
`;

export interface HeroSubComponents {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
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
