import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { OpenGovLogo } from '../';
import { CaseStudyCard } from './CaseStudyCard';
import styled from 'styled-components';
import { openGovBlue, unit, laserlikeBlue } from '../../styles';
import { BrowserFrame } from '../BrowserFrame';
import { Tag } from '../Tag';
import { LaserlikeLogo } from '../LaserlikeLogo';
import { PhoneFrame } from '../PhoneFrame';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: ${unit * 7}px;
  }
`;

const OpenGovCaseStudyCard = styled(CaseStudyCard)`
  background-color: ${openGovBlue};
`;

const LaserlikeCaseStudyCard = styled(CaseStudyCard)`
  background-color: ${laserlikeBlue};
`;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('CaseStudyCard', () => (
    <Container>
      <OpenGovCaseStudyCard>
        <CaseStudyCard.ImageContent>
          <BrowserFrame>
            <div />
          </BrowserFrame>
        </CaseStudyCard.ImageContent>
        <CaseStudyCard.TextContent>
          <CaseStudyCard.Logo>
            <OpenGovLogo contentStyle="light" />
          </CaseStudyCard.Logo>
          <CaseStudyCard.Title>
            Accelerating the future of open governments
          </CaseStudyCard.Title>
          <CaseStudyCard.Body>
            I worked with OpenGov to accelerate feature development for their
            next generation reporting platform.
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
    </Container>
  ));
