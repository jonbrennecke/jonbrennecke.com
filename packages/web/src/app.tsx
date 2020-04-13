import {
  BrowserFrame,
  CaseStudyCard,
  laserlikeBlue,
  LaserlikeLogo,
  openGovBlue,
  OpenGovEmblem,
  OpenGovLogo,
  Tag,
  unit,
  PhoneFrame,
  BarkdLogo,
  barkdDarkBlue
} from '@portfolio/components';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: ${unit * 7}px;
  }
`;

const BaseCaseStudyCard = styled(CaseStudyCard)`
  max-width: 1024px;
`;

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

const LaserlikeCaseStudyCard = styled(BaseCaseStudyCard)`
  background-color: ${laserlikeBlue};
`;

const BarkdCaseStudyCard = styled(BaseCaseStudyCard)`
  background-color: ${barkdDarkBlue};
`;

export const App = hot(() => (
  <Container>
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

    <LaserlikeCaseStudyCard>
      <CaseStudyCard.TextContent>
        <CaseStudyCard.Logo>
          <LaserlikeLogo contentStyle="light" />
        </CaseStudyCard.Logo>
        <CaseStudyCard.Title>
          Automating deployments for a successful Apple acquisition
        </CaseStudyCard.Title>
        <CaseStudyCard.Body>
          I developed fully automated infrastructure to deploy Laserlike’s iOS
          and Android apps at the push of a button. Laserlike was acquired by
          Apple in 2018.
        </CaseStudyCard.Body>
        <CaseStudyCard.ViewCaseStudyButton>
          View Case Study
        </CaseStudyCard.ViewCaseStudyButton>
        <CaseStudyCard.Tags>
          <Tag>React Native</Tag>
          <Tag>Flow</Tag>
          <Tag>Ansible</Tag>
          <Tag>Jenkins</Tag>
        </CaseStudyCard.Tags>
      </CaseStudyCard.TextContent>
      <CaseStudyCard.ImageContent>
        <PhoneFrame />
      </CaseStudyCard.ImageContent>
    </LaserlikeCaseStudyCard>

    <BarkdCaseStudyCard>
      <CaseStudyCard.ImageContent>
        <PhoneFrame />
      </CaseStudyCard.ImageContent>
      <CaseStudyCard.TextContent>
        <CaseStudyCard.Logo>
          <BarkdLogo contentStyle="light" />
        </CaseStudyCard.Logo>
        <CaseStudyCard.Title>
          Building a cross-platform MVP for an early-stage startup
        </CaseStudyCard.Title>
        <CaseStudyCard.Body>
          Starting from scratch, I worked with Barkd to create an iOS, Android
          and web experience for their exciting new platform
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
  </Container>
));
