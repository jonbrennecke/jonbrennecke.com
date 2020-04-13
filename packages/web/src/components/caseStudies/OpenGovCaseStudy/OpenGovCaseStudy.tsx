import {
  BrowserFrame,
  openGovBlue,
  OpenGovEmblem,
  OpenGovLogo,
  CaseStudyCard,
  Tag
} from '@portfolio/components';
import React from 'react';
import styled from 'styled-components';
import { BaseCaseStudyCard } from '../BaseCaseStudyCard';

const OpenGovCaseStudyCard = styled(BaseCaseStudyCard)`
  background-color: ${openGovBlue};
`;

const OpenGovBrowser = styled(BrowserFrame)`
  height: 450px;
`;

const StyledOpenGovEmblem = styled(OpenGovEmblem)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.08;
  z-index: -1;
  width: 35%;
  max-width: 320px;
`;

export const OpenGovCaseStudy = () => (
  <OpenGovCaseStudyCard>
    <CaseStudyCard.ImageContent>
      <OpenGovBrowser>
        <div />
      </OpenGovBrowser>
    </CaseStudyCard.ImageContent>
    <CaseStudyCard.TextContent>
      <CaseStudyCard.Logo>
        <OpenGovLogo contentStyle="light" />
      </CaseStudyCard.Logo>
      <CaseStudyCard.Title>
        Accelerating the future of open governments
      </CaseStudyCard.Title>
      <CaseStudyCard.Body>
        I worked with OpenGov to accelerate feature development for their next
        generation reporting platform.
      </CaseStudyCard.Body>
      <CaseStudyCard.ViewCaseStudyButton>
        View Case Study
      </CaseStudyCard.ViewCaseStudyButton>
      <CaseStudyCard.Tags>
        <Tag>React</Tag>
        <Tag>Typescript</Tag>
        <Tag>D3</Tag>
      </CaseStudyCard.Tags>
    </CaseStudyCard.TextContent>
    <StyledOpenGovEmblem />
  </OpenGovCaseStudyCard>
);
