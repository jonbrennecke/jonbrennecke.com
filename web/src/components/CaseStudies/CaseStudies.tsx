import { maxWidth, offWhite, SectionHeader, unit } from '@portfolio/components';
import React from 'react';
import styled from 'styled-components';
import { BarkdCaseStudy } from './BarkdCaseStudy';
import { LaserlikeCaseStudy } from './LaserlikeCaseStudy';
import { OpenGovCaseStudy } from './OpenGovCaseStudy';
import { CurativeCaseStudy } from './CurativeCaseStudy';
import { CollageCreatorCaseStudy } from './CollageCreatorCaseStudy';

const Container = styled.div`
  position: relative;
  max-width: ${maxWidth}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    width: 100vw;
    background-color: ${offWhite};
    z-index: -1;
    transform: translateX(-50%);
  }
`;

const CaseStudiesList = styled.div`
  padding: ${unit * 7}px ${unit * 5}px;

  & > *:not(:first-child) {
    margin-top: ${unit * 7}px;
  }
`;

const StyledSectionHeader = styled(SectionHeader)`
  padding: ${unit * 10}px ${unit * 5}px;

  @media (min-width: 1024px) {
    padding: ${unit * 7}px ${unit * 10}px;
  }
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
    <CaseStudiesList>
      <CollageCreatorCaseStudy />
      <CurativeCaseStudy />
      <OpenGovCaseStudy />
      <LaserlikeCaseStudy />
      <BarkdCaseStudy />
    </CaseStudiesList>
  </Container>
);
