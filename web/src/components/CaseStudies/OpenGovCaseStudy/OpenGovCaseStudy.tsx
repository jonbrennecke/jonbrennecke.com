import {
  BrowserFrame,
  CaseStudyCard,
  openGovBlue,
  OpenGovEmblem,
  OpenGovLogo,
  Tag,
} from "@portfolio/components";
import React from "react";
import styled from "styled-components";
import { BaseCaseStudyCard } from "../BaseCaseStudyCard";
import openGovScreenshot from "../../../../../assets/images/openGovScreenshot.png";

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

const OpenGovScreenshot = styled.div`
  background-image: url(${openGovScreenshot.src});
  background-size: cover;
  width: 100%;
`;

export const OpenGovCaseStudy = () => (
  <OpenGovCaseStudyCard>
    <CaseStudyCard.ImageContent>
      <OpenGovBrowser>
        <OpenGovScreenshot />
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
        <p>
          OpenGov's software is bringing efficiency and transparency to state
          and local governments across the country.
        </p>
        <p>
          I worked with OpenGov to accelerate development of their
          next-generation reporting platform.
        </p>
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
