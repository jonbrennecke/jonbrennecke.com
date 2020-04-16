import React from 'react';
import {
  CheckList,
  SectionHeader,
  unit,
  maxWidth,
} from '@portfolio/components';
import styled from 'styled-components';

const StyledSectionHeader = styled(SectionHeader)`
  padding: 0 0 ${unit * 15}px 0;
`;

const CheckListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${unit * 3}px;
`;

const Container = styled.div`
  padding: ${unit * 15}px ${unit * 5}px;
  max-width: ${maxWidth}px;
`;

export const Capabilities = () => (
  <Container>
    <StyledSectionHeader>
      <SectionHeader.SubTitle>What I do best</SectionHeader.SubTitle>
      <SectionHeader.Title>Capabilities</SectionHeader.Title>
    </StyledSectionHeader>
    <CheckListContainer>
      <CheckList>
        <CheckList.Item>Mobile App Development</CheckList.Item>
        <CheckList.Item>Mobile App Design</CheckList.Item>
        <CheckList.Item>Wireframing</CheckList.Item>
        <CheckList.Item>Web Development</CheckList.Item>
        <CheckList.Item>Web Design</CheckList.Item>
        <CheckList.Item>Consulting & Strategy</CheckList.Item>
      </CheckList>
    </CheckListContainer>
  </Container>
);
