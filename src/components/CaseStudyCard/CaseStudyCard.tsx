import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { trueWhite, unit } from '../../styles';
import { Text } from '../Text';

export interface CaseStudyCardProps {
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Title = styled(Heading)`
  font-size: 25px;
  color: ${trueWhite};
`;

const Body = styled(Text)`
  font-size: 15px;
  color: ${trueWhite};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${unit * 3}px;

  & > ${Title} {
    margin-top: ${unit * 3}px;
  }

  & > ${Body} {
    margin-top: ${unit * 3}px;
  }
`;

interface CaseStudyCardSubComponents {
  Title: typeof Title;
  Body: typeof Body;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> &
  CaseStudyCardSubComponents = ({
  className,
  children,
}: CaseStudyCardProps) => (
  <Container className={className}>{children}</Container>
);

CaseStudyCard.Title = Title;
CaseStudyCard.Body = Body;
