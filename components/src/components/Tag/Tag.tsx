import React from "react";
import styled from "styled-components";
import { Text, ITextProps } from "../Text";
import { unit, trueWhite, colorToRGBA } from "../../styles";

const Container = styled.div`
  padding: ${unit * 0.5}px ${unit * 2}px;
  background-color: ${colorToRGBA(trueWhite, 0.1)};
  border-radius: ${unit * 0.5}px;
  display: inline-block;
`;

const TagText = styled(Text)`
  color: ${trueWhite};
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
`;

export interface TagProps {
  children: ITextProps["children"];
}

interface TagSubComponents {
  Group: typeof TagGroup;
}

export const Tag: React.FC<TagProps> & TagSubComponents = ({
  children,
}: TagProps) => (
  <Container>
    <TagText>{children}</TagText>
  </Container>
);

const TagGroup = styled.div`
  display: inline-block;
  padding-top: ${unit * 3}px;

  & > *:not(:first-child) {
    margin-left: ${unit}px;
  }
`;

Tag.Group = TagGroup;
