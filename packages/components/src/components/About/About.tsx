import React from 'react';
import styled from 'styled-components';
import { maxWidth, trueBlack, trueWhite, unit } from '../../styles';
import { Heading } from '../Heading';
import { Text } from '../Text';

const ImageContentContainer = styled.div`
  grid-area: image;

  & > * {
    height: 100%;
    width: 50%;
    left: calc(50% + ${unit * 2.5}px);
    position: absolute;
  }
`;

const ImageContent = ({ children }: React.HTMLProps<HTMLDivElement>) => (
  <ImageContentContainer>{children}</ImageContentContainer>
);

const TextContent = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  padding: ${unit * 15}px ${unit * 7}px ${unit * 15}px 0;
  justify-content: center;
`;

const Body = styled(Text)`
  grid-area: text;
  color: ${trueWhite};
  line-height: 1.75em;

  a {
    color: ${trueWhite};
    font-weight: bold;
  }
`;

const Title = styled(Heading)`
  grid-area: text;
  color: ${trueWhite};
  font-size: ${unit * 8}px;
  white-space: normal;
  padding-bottom: ${unit * 5}px;
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
  position: relative;
  background-color: ${trueBlack};
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 600px;
  overflow: hidden;
`;

const Contents = styled.div`
  max-width: ${maxWidth}px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'text image';
  column-gap: ${unit * 5}px;
`;

export const About: React.FC<AboutProps> & AboutSubComponents = ({
  className,
  children,
}: AboutProps) => (
  <Container className={className}>
    <Contents>{children}</Contents>
  </Container>
);

About.Body = Body;
About.Title = Title;
About.TextContent = TextContent;
About.ImageContent = ImageContent;
