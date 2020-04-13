import {
  PhoneFrame,
  CaseStudyCard,
  Tag,
  LaserlikeLogo,
  laserlikeBlue
} from '@portfolio/components';
import React from 'react';
import styled from 'styled-components';
import { BaseCaseStudyCard } from '../BaseCaseStudyCard';

const LaserlikeCaseStudyCard = styled(BaseCaseStudyCard)`
  background-color: ${laserlikeBlue};
`;

export const LaserlikeCaseStudy = () => (
  <LaserlikeCaseStudyCard>
    <CaseStudyCard.TextContent>
      <CaseStudyCard.Logo>
        <LaserlikeLogo contentStyle="light" />
      </CaseStudyCard.Logo>
      <CaseStudyCard.Title>
        Automating deployments for a successful Apple acquisition
      </CaseStudyCard.Title>
      <CaseStudyCard.Body>
        I developed fully automated infrastructure to deploy Laserlike’s iOS and
        Android apps at the push of a button. Laserlike was acquired by Apple in
        2018.
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
);
