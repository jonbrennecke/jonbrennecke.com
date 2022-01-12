import {
  Hero,
  maxWidth,
  PhoneScene,
  trueWhite,
  unit,
} from "@portfolio/components";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import collageCreatorScreenshot from "../../../assets/images/Simulator_Screen_Shot.png";
import collageCreatorIcon from "../../../assets/images/collage_creator_icon_transparent.png";
import { Page } from "../../src/components";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-35deg, #fff3ff, #56b1ff);
    z-index: -1;
  }
`;

const HeroCenter = styled.div`
  display: flex;
  width: 100%;
  max-width: ${maxWidth}px;
`;

const HeroColumn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const AppIcon = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: ${unit * 3}px;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Page contentStyle="light">
      {() => (
        <HeroContainer>
          <HeroCenter>
            <HeroColumn>
              <Hero>
                <AppIcon src={collageCreatorIcon.src} />
                <Hero.Title color={trueWhite}>Collage Creator</Hero.Title>
                <Hero.SubTitle color={trueWhite}>
                  Collage Creator is a new app for creating collages of photos.
                </Hero.SubTitle>
                <Hero.ButtonGroup>
                  {/* TODO: replace with a "Download from the App Store" button */}
                  <Hero.Button
                    variant="primary"
                    size="large"
                    onClick={() => {}}
                  >
                    Call to Action
                  </Hero.Button>
                </Hero.ButtonGroup>
              </Hero>
            </HeroColumn>
            <HeroColumn>
              <PhoneScene
                imageSource={collageCreatorScreenshot.src}
                rotationY={scrollY}
              />
            </HeroColumn>
          </HeroCenter>
        </HeroContainer>
      )}
    </Page>
  );
}
