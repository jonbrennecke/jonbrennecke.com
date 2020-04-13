import React from 'react';
import styled from 'styled-components';
import { unit } from '@portfolio/components';
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

export const CaseStudies = () => (
  <Container>
    <OpenGovCaseStudy />
    <LaserlikeCaseStudy />
    <BarkdCaseStudy />
  </Container>
);
