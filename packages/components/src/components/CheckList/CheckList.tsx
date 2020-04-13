import React from 'react';
import styled from 'styled-components';
import { Text, ITextProps } from '../Text';
import { Check } from '../Check/Check';
import { unit, darkGreen } from '../../styles';

const CheckListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export interface CheckListItemProps {
  children?: ITextProps['children'];
}

const StyledCheck = styled(Check)`
  width: ${unit * 4}px;
  margin-right: ${unit * 2}px;
`;

const StyledText = styled(Text)`
  color: ${darkGreen};
  font-size: 1.25em;
`;

const CheckListItem = ({ children }: CheckListItemProps) => (
  <CheckListItemContainer>
    <StyledCheck />
    <StyledText>{children}</StyledText>
  </CheckListItemContainer>
);

export interface CheckListProps {
  children?: React.ReactChild | React.ReactChild[];
}

export interface CheckListSubComponents {
  Item: typeof CheckListItem;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: ${unit * 2}px;
  row-gap: ${unit * 2}px;
`;

export const CheckList: React.FC<CheckListProps> & CheckListSubComponents = ({
  children
}: CheckListProps) => <Container>{children}</Container>;

CheckList.Item = CheckListItem;
