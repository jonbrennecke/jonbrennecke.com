import React from 'react';
import styled from 'styled-components';
import { unit, SectionHeader } from '@portfolio/components';
import { OpenGovCaseStudy } from './OpenGovCaseStudy';
import { LaserlikeCaseStudy } from './LaserlikeCaseStudy';
import { BarkdCaseStudy } from './BarkdCaseStudy';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: ${unit * 7}px;
  }
`;

const StyledSectionHeader = styled(SectionHeader)`
  padding: ${unit * 10}px ${unit * 5}px;
`;

export const CaseStudies = () => (
  <Container>
    <StyledSectionHeader>
      <SectionHeader.SubTitle>Case</SectionHeader.SubTitle>
      <SectionHeader.Title>Studies</SectionHeader.Title>
      <SectionHeader.Paragraph>
        Check out some featured projects that I've been working on recently.
        Want to see more? Contact me for more information.
      </SectionHeader.Paragraph>
    </StyledSectionHeader>
    <OpenGovCaseStudy />
    <LaserlikeCaseStudy />
    <BarkdCaseStudy />
  </Container>
);
