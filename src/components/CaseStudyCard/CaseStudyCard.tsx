import React from 'react';
import styled, { css } from 'styled-components';
import { Heading } from '../Heading';
import { trueWhite, unit, colorToRGBA, trueBlack } from '../../styles';
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

const borderShadowCss = css`
  box-shadow: 0px 6px 45px ${colorToRGBA(trueBlack, 0.06)};
`;

const darkerBorderShadowCss = css`
  box-shadow: 0px 6px 45px ${colorToRGBA(trueBlack, 0.18)};
`;

const ImageContent = styled.div`
  display: flex;
  flex: 1;
  transition: 150ms transform ease-in-out, 250ms box-shadow ease-in-out;
  ${borderShadowCss}
`;

const TextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: ${unit * 3}px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: ${unit * 3}px;
  perspective: 1500px;
  border-radius: ${unit}px;
  padding: ${unit * 3}px;

  &:hover ${ImageContent} {
    ${darkerBorderShadowCss}
    transform: rotateY(5deg);
  }

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
  ImageContent: typeof ImageContent;
  TextContent: typeof TextContent;
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
CaseStudyCard.ImageContent = ImageContent;
CaseStudyCard.TextContent = TextContent;