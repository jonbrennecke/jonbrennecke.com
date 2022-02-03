import {
  CaseStudyCard,
  collageCreatorLightRed,
  collageCreatorMediumRed,
  Tag,
  trueBlack,
} from '@portfolio/components';
import Link from 'next/link';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import appLogoMark from '../../../../assets/images/collage_creator_logomark.png';
import appMarketingImage from '../../../../assets/images/collage_creator_marketing_image.png';
import { BaseCaseStudyCard } from './BaseCaseStudyCard';

const StyledCaseStudyCard = styled(BaseCaseStudyCard)`
  background: linear-gradient(
    15deg,
    ${collageCreatorMediumRed},
    ${collageCreatorLightRed}
  );
  box-shadow: 0px 0px 75px ${rgba(trueBlack, 0)};

  &:hover {
    box-shadow: 0px 0px 75px ${rgba(trueBlack, 0.18)};
  }
`;

const LogoImage = styled.img`
  position: relative;
  height: 75px;
  left: -15px;
`;

const AppMarketingImage = styled.img``;

export const CollageCreatorCaseStudy = () => (
  <StyledCaseStudyCard>
    <CaseStudyCard.ImageContent>
      <AppMarketingImage src={appMarketingImage.src} />
    </CaseStudyCard.ImageContent>
    <CaseStudyCard.TextContent>
      <CaseStudyCard.Logo>
        <LogoImage src={appLogoMark.src} />
      </CaseStudyCard.Logo>
      <CaseStudyCard.Title>Making collages cool again</CaseStudyCard.Title>
      <CaseStudyCard.Body>
        <p>
          With Collage Creator, you can easily create collages with the
          intuitive editing tools. Just pick your favorite images and choose a
          layout.
        </p>
        <br />
        <p>Collage Creator is now available in the iOS App Store.</p>
      </CaseStudyCard.Body>
      <Link href="/case-studies/collage-creator">
        <a>
          <CaseStudyCard.ViewCaseStudyButton>
            View Case Study
          </CaseStudyCard.ViewCaseStudyButton>
        </a>
      </Link>
      <CaseStudyCard.Tags>
        <Tag>iOS</Tag>
        <Tag>SwiftUI</Tag>
        <Tag>Metal</Tag>
      </CaseStudyCard.Tags>
    </CaseStudyCard.TextContent>
  </StyledCaseStudyCard>
);
