import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { Text, ITextProps } from '../Text';
import { unit, blue } from '../../styles';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'subtitle subtitle paragraph paragraph'
    'title title paragraph paragraph';
  padding: ${unit * 3}px 0;
`;

const Divider = styled.div`
  position: relative;
  min-width: ${unit * 3}px;
  max-width: ${unit * 3}px;
  height: 100%;
  transform: translateX(-100%);

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 3px;
    left: ${unit * 1.5}px;
    background-color: ${blue};
    transform: rotate(5deg);
  }
`;

const Title = styled(Heading)`
  grid-area: title;
  font-size: ${unit * 10}px;
`;

const SubTitle = styled(Heading)`
  font-size: ${unit * 5}px;
  font-weight: lighter;
  color: #726e84;
  grid-area: subtitle;
`;

const ParagraphText = styled(Text)`
  padding: ${unit * 3}px;
  font-size: 1.25em;
  color: #726e84; // TODO
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  grid-area: paragraph;
`;

const Paragraph = (props: ITextProps) => (
  <ParagraphContainer>
    <Divider />
    <ParagraphText {...props} />
  </ParagraphContainer>
);

export interface SectionHeaderProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export interface SectionHeaderSubComponents {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
  Paragraph: typeof Paragraph;
}

export const SectionHeader: React.FC<SectionHeaderProps> &
  SectionHeaderSubComponents = ({
  className,
  children,
}: SectionHeaderProps) => (
  <Container className={className}>{children}</Container>
);

SectionHeader.Title = Title;
SectionHeader.SubTitle = SubTitle;
SectionHeader.Paragraph = Paragraph;
