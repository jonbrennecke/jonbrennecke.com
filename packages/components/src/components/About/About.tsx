import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import { trueBlack, trueWhite, unit } from '../../styles';
import { Heading } from '../Heading';

const ImageContent = styled.div`
  grid-area: image;

  & > * {
    width: 100%;
    height: 100%;
  }
`;

const TextContent = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  padding: ${unit * 7}px ${unit * 5}px;
`;

const Body = styled(Text)`
  grid-area: text;
  color: ${trueWhite};
`;

const Title = styled(Heading)`
  grid-area: text;
  color: ${trueWhite};
  font-size: ${unit * 8}px;
  white-space: normal;
  padding-bottom: ${unit * 3}px;
`;

export interface AboutSubComponents {
  Body: typeof Body;
  Title: typeof Title;
  TextContent: typeof TextContent;
  ImageContent: typeof ImageContent;
}

export interface AboutProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'text image';
  column-gap: ${unit * 5}px;
  background-color: ${trueBlack};
`;

export const About: React.FC<AboutProps> & AboutSubComponents = ({
  className,
  children,
}: AboutProps) => <Container className={className}>{children}</Container>;

About.Body = Body;
About.Title = Title;
About.TextContent = TextContent;
About.ImageContent = ImageContent;
