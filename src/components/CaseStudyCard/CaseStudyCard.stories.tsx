import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { OpenGovLogo } from '../';
import { CaseStudyCard } from './CaseStudyCard';
import styled from 'styled-components';
import { openGovBlue } from '../../styles';
import { BrowserFrame } from '../BrowserFrame';
import { Tag } from '../Tag';

const OpenGovCaseStudyCard = styled(CaseStudyCard)`
  background-color: ${openGovBlue};
`;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('CaseStudyCard', () => (
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
    </OpenGovCaseStudyCard>
  ));
