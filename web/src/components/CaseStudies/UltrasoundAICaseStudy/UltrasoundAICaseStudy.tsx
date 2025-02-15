import {
  BrowserFrame,
  PhoneFrame,
  CaseStudyCard,
  Tag,
  trueBlack,
} from '@portfolio/components';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import logoMark from '../../../../../assets/images/ultrasound_ai_logomark.png';
import screenshot from '../../../../../assets/images/ultrasound_ai_hero_screenshot_tablet.png';
import guilloche from '../../../../../assets/images/guilloche.svg';
import { BaseCaseStudyCard } from '../BaseCaseStudyCard';

const StyledCaseStudyCard = styled(BaseCaseStudyCard)`
  box-shadow: 0px 0px 75px ${rgba(trueBlack, 0)};

  &:hover {
    box-shadow: 0px 0px 75px ${rgba(trueBlack, 0.18)};
  }
`;

const Browser = styled(BrowserFrame)`
  height: 450px;
`;

const LogoImage = styled.img`
  position: relative;
  height: 75px;
  left: -15px;
`;

const BrowserScreenshot = styled.div`
  background-image: url(${screenshot.src});
  background-size: cover;
  width: 100%;
`;

export const UltrasoundAICaseStudy = () => (
  <StyledCaseStudyCard className="bg-slate-900">
    <CaseStudyCard.ImageContent className="relative z-10">
      <Browser>
        <BrowserScreenshot />
      </Browser>
      {/* <PhoneFrame>
        <image
          mask="url(#mask-10)"
          x="3"
          y="6"
          width="746"
          href={screenshot.src}
        />
      </PhoneFrame> */}
    </CaseStudyCard.ImageContent>

    <CaseStudyCard.TextContent className="relative z-10">
      <CaseStudyCard.Logo>
        <LogoImage src={logoMark.src} />
      </CaseStudyCard.Logo>
      <CaseStudyCard.Title>
        Create lifelike baby photos from 3D ultrasounds
      </CaseStudyCard.Title>
      <CaseStudyCard.Body>
        <p>
          When we got the ultrasound photos of our first baby, I was so excited
          to see what she would look like. Like most expecting parents, I
          struggled to make out her features through the grainy, blurry images.
          That experience led me to create{' '}
          <a
            href="https://aiultrasoundphotos.com"
            target="self"
            className="font-semibold underline"
          >
            Ultrasound AI
          </a>
          .
        </p>
        <br />
        <p>
          Thousands of expecting parents have used Ultrasound AI to see a
          preview of their baby's features.
        </p>
      </CaseStudyCard.Body>
      <a href="https://aiultrasoundphotos.com" target="self">
        <CaseStudyCard.ViewCaseStudyButton>
          Check it out at <strong>aiultrasoundphotos.com</strong>
        </CaseStudyCard.ViewCaseStudyButton>
      </a>
      <CaseStudyCard.Tags>
        <Tag>React</Tag>
        <Tag>AWS</Tag>
        <Tag>AI</Tag>
      </CaseStudyCard.Tags>
    </CaseStudyCard.TextContent>

    <div
      className="[mask-size:20px_20px] [mask-repeat:repeat] absolute w-full h-full top-0 left-0 bg-gradient-to-bl from-neutral-500/20 to-neutral-500/0"
      style={{
        maskImage: `url(${guilloche.src})`,
      }}
    />
  </StyledCaseStudyCard>
);
