import {
  BrowserFrame,
  CaseStudyCard,
  curativeBlue40,
  curativeBlue50,
  CurativeLogo,
  Tag,
  CurativeEmblem,
} from '@portfolio/components';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import screenshot from '../../../../../assets/images/book.curative.com.png';
import { BaseCaseStudyCard } from '../BaseCaseStudyCard';
import Link from 'next/link';

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

const EmblemContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Emblem = styled(CurativeEmblem)`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.08;
  z-index: -1;
  width: 50%;
  max-width: 400px;
  transform: translateX(-25%) translateY(-50%) rotate(17deg);
  pointer-events: none;
`;

export const CurativeCaseStudy = () => (
  <CurativeCaseStudyCard>
    <EmblemContainer>
      <Emblem />
    </EmblemContainer>
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
      <Link href="/case-studies/curative">
        <a>
          <CaseStudyCard.ViewCaseStudyButton>
            View Case Study
          </CaseStudyCard.ViewCaseStudyButton>
        </a>
      </Link>
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
