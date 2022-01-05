import { maxWidth, offWhite, SectionHeader, unit } from "@portfolio/components";
import React from "react";
import styled from "styled-components";
import { BarkdCaseStudy } from "./BarkdCaseStudy";
import { LaserlikeCaseStudy } from "./LaserlikeCaseStudy";
import { OpenGovCaseStudy } from "./OpenGovCaseStudy";
import { CurativeCaseStudy } from "./CurativeCaseStudy";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: ${unit * 7}px 0;
  max-width: ${maxWidth}px;

  & > *:not(:first-child) {
    margin-top: ${unit * 7}px;
  }

  &::before {
    content: "";
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
    <CurativeCaseStudy />
    <OpenGovCaseStudy />
    <LaserlikeCaseStudy />
    <BarkdCaseStudy />
  </Container>
);
