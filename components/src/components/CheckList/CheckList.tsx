import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { trueWhite, unit } from '../../styles';
import { Check } from '../Check/Check';
import { ITextProps, Text } from '../Text';

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
  min-width: ${unit * 4}px;
  margin-right: ${unit * 2}px;
`;

const StyledText = styled(Text)`
  color: ${trueWhite};
  font-size: 1.25em;
`;

const CheckListItem = ({ children }: CheckListItemProps) => (
  <CheckListItemContainer>
    <StyledCheck
      checkColor={trueWhite}
      backgroundColor={rgba(trueWhite, 0.25)}
    />
    <StyledText>{children}</StyledText>
  </CheckListItemContainer>
);

export interface CheckListProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export interface CheckListSubComponents {
  Item: typeof CheckListItem;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${unit * 5}px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    column-gap: ${unit * 5}px;
  }
`;

export const CheckList: React.FC<CheckListProps> & CheckListSubComponents = ({
  children,
  className,
}: CheckListProps) => <Container className={className}>{children}</Container>;

CheckList.Item = CheckListItem;
