import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { OpenGovLogo } from '../';
import { CaseStudyCard } from './CaseStudyCard';
import styled from 'styled-components';
import { openGovBlue } from '../../styles';

const OpenGovCaseStudyCard = styled(CaseStudyCard)`
  background-color: ${openGovBlue};
`;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('CaseStudyCard', () => (
    <OpenGovCaseStudyCard>
      <OpenGovLogo contentStyle="light" />
      <CaseStudyCard.Title>
        Accelerating the future of open governments
      </CaseStudyCard.Title>
      <CaseStudyCard.Body>
        I worked with OpenGov as a consultant to accelerate feature development
        for their next generation reporting platform.
      </CaseStudyCard.Body>
    </OpenGovCaseStudyCard>
  ));
