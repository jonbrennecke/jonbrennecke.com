import {
  BrowserFrame,
  CaseStudyCard,
  curativeBlue40,
  curativeBlue50,
  CurativeLogo,
  Tag,
  trueBlack,
} from '@portfolio/components';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import screenshot from '../../../../assets/images/book.curative.com.png';
import { BaseCaseStudyCard } from '../BaseCaseStudyCard';

const CurativeCaseStudyCard = styled(BaseCaseStudyCard)`
  background: linear-gradient(15deg, ${curativeBlue50}, ${curativeBlue40});
  box-shadow: 0px 0px 75px ${rgba(curativeBlue50, 0)};

  &:hover {
    box-shadow: 0px 0px 75px ${rgba(curativeBlue50, 0.18)};
  }
`;

const Browser = styled(BrowserFrame)`
  height: 450px;
`;

const BrowserScreenshot = styled.div`
  background-image: url(${screenshot.src});
  background-size: cover;
  width: 100%;
`;

export const CurativeCaseStudy = () => (
  <CurativeCaseStudyCard>
    <CaseStudyCard.TextContent>
      <CaseStudyCard.Logo>
        <CurativeLogo contentStyle="light" />
      </CaseStudyCard.Logo>
      <CaseStudyCard.Title>
        Pioneering healthcare solutions to the COVID-19 pandemic
      </CaseStudyCard.Title>
      <CaseStudyCard.Body>
        As an early employee of Curative, I helped build the startup's COVID-19
        testing and vaccination software. With thousands of locations around the
        country, Curative has delivered over 25M COVID-19 tests and 2M
        vaccinations.
      </CaseStudyCard.Body>
      <CaseStudyCard.ViewCaseStudyButton>
        View Case Study
      </CaseStudyCard.ViewCaseStudyButton>
      <CaseStudyCard.Tags>
        <Tag>React</Tag>
        <Tag>Typescript</Tag>
        <Tag>Python</Tag>
        <Tag>Flask</Tag>
      </CaseStudyCard.Tags>
    </CaseStudyCard.TextContent>
    <CaseStudyCard.ImageContent>
      <Browser>
        <BrowserScreenshot />
      </Browser>
    </CaseStudyCard.ImageContent>
  </CurativeCaseStudyCard>
);
