import {
  AppStoreButton,
  CheckList,
  collageCreatorDarkRed,
  collageCreatorLightRed,
  collageCreatorMediumRed,
  Hero,
  maxWidth,
  PhoneScene,
  unit,
} from '@portfolio/components';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import collageCreatorIcon from '../../../assets/images/collage_creator_icon_transparent.png';
import collageCreatorMarketingImage from '../../../assets/images/collage_creator_marketing_image.png';
import collageCreatorScreenshot from '../../../assets/images/collage_creator_marketing_image_primary.png';
import { Page } from '../../src/components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    padding-bottom: 0;
  }

  h1,
  p {
    color: transparent;
    background: linear-gradient(
      -35deg,
      ${collageCreatorMediumRed},
      ${collageCreatorLightRed}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroCenter = styled.div`
  display: flex;
  width: 100%;
  max-width: ${maxWidth}px;

  & > *:not(:first-child) {
    display: none;
  }

  @media (min-width: 640px) {
    & > *:not(:first-child) {
      display: flex;
    }
  }
`;

const AppIcon = styled.img`
  position: relative;
  height: 150px;
  width: 150px;
  margin-bottom: ${unit * 3}px;
  left: -${unit * 2}px;
`;

const MarketingImage = styled.img`
  width: 100%;
  max-width: 450px;
  object-fit: contain;
`;

const MainContentContainer = styled.div`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      -35deg,
      ${collageCreatorDarkRed},
      ${collageCreatorLightRed}
    );
    z-index: -1;
  }
`;

const MainContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1024px;
  padding: 49px 35px;
`;

const MarketingImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCheckList = styled(CheckList)`
  padding: 49px 35px;
`;

export default function CollageCreator() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      const maxScrollHeight = Math.max(
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );
      const normalizedScrollY = window.scrollY / maxScrollHeight;
      setScrollY(-normalizedScrollY * Math.PI * 0.5);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Page>
      {() => (
        <>
          <HeroContainer>
            <HeroCenter>
              <Hero>
                <AppIcon src={collageCreatorIcon.src} />
                <Hero.Title as="h1">Collage Creator</Hero.Title>
                <Hero.SubTitle as="p">
                  Arrange photos into beautiful collages with intuitive editing
                  tools
                </Hero.SubTitle>
                <Hero.ButtonGroup>
                  {/* TODO: onClick */}
                  <AppStoreButton backgroundColor="black" />
                </Hero.ButtonGroup>
              </Hero>
              <Hero>
                <PhoneScene
                  imageSource={collageCreatorScreenshot.src}
                  rotationY={scrollY}
                />
              </Hero>
            </HeroCenter>
          </HeroContainer>
          <MainContentContainer>
            <MainContentCenter>
              <MarketingImageContainer>
                <MarketingImage src={collageCreatorMarketingImage.src} />
              </MarketingImageContainer>
              <StyledCheckList>
                <CheckList.Item>Flexible layouts</CheckList.Item>
                <CheckList.Item>
                  Resize, rotate, zoom and move images
                </CheckList.Item>
                <CheckList.Item>
                  Adjust exposure, contrast and other image controls
                </CheckList.Item>
                <CheckList.Item>Inset borders</CheckList.Item>
                <CheckList.Item>Smart colors</CheckList.Item>
                <CheckList.Item>Share in 4K</CheckList.Item>
              </StyledCheckList>
              <AppStoreButton backgroundColor="black" />
            </MainContentCenter>
          </MainContentContainer>
        </>
      )}
    </Page>
  );
}
