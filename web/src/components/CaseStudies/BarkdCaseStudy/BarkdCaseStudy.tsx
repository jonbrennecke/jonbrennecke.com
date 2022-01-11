import {
  PhoneFrame,
  CaseStudyCard,
  Tag,
  BarkdLogo,
  barkdDarkBlue,
} from "@portfolio/components";
import React from "react";
import styled from "styled-components";
import { BaseCaseStudyCard } from "../BaseCaseStudyCard";

import barkdScreenshot from "../../../../../assets/images/barkdScreenshot.png";

// @ts-ignore
const BarkdCaseStudyCard = styled(BaseCaseStudyCard)`
  background-color: ${barkdDarkBlue};
`;

const BarkdScreenshot = () => (
  <image
    mask="url(#mask-10)"
    x="3"
    y="3"
    width="744"
    href={barkdScreenshot.src}
  />
);

export const BarkdCaseStudy = () => (
  <BarkdCaseStudyCard>
    <CaseStudyCard.ImageContent>
      <PhoneFrame>
        <BarkdScreenshot />
      </PhoneFrame>
    </CaseStudyCard.ImageContent>
    <CaseStudyCard.TextContent>
      <CaseStudyCard.Logo>
        <BarkdLogo contentStyle="light" />
      </CaseStudyCard.Logo>
      <CaseStudyCard.Title>
        Building a cross-platform MVP for an early-stage startup
      </CaseStudyCard.Title>
      <CaseStudyCard.Body>
        Starting from scratch, I worked with Barkd to create an iOS, Android and
        web experience for their exciting new platform
      </CaseStudyCard.Body>
      <CaseStudyCard.ViewCaseStudyButton>
        View Case Study
      </CaseStudyCard.ViewCaseStudyButton>
      <CaseStudyCard.Tags>
        <Tag>React Native</Tag>
        <Tag>Typescript</Tag>
        <Tag>Firebase</Tag>
      </CaseStudyCard.Tags>
    </CaseStudyCard.TextContent>
  </BarkdCaseStudyCard>
);
