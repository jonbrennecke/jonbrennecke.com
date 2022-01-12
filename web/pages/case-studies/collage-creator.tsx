import {
  AppStoreButton,
  Hero,
  maxWidth,
  PhoneScene,
  trueBlack,
  unit,
} from "@portfolio/components";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import collageCreatorIcon from "../../../assets/images/collage_creator_icon_transparent.png";
import collageCreatorScreenshot from "../../../assets/images/Simulator_Screen_Shot.png";
import { Page } from "../../src/components";

import "../../../assets/models/apple_iphone_13_pro_max/scene.gltf";

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
    background: linear-gradient(-35deg, #a6cfff, #cedffe);
    z-index: -1;
  }
`;

const HeroCenter = styled.div`
  display: flex;
  width: 100%;
  max-width: ${maxWidth}px;
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
    <Page>
      {() => (
        <HeroContainer>
          <HeroCenter>
            <Hero>
              <AppIcon src={collageCreatorIcon.src} />
              <Hero.Title>Collage Creator</Hero.Title>
              <Hero.SubTitle color={trueBlack}>
                Collage Creator is a new app for creating collages of photos.
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
      )}
    </Page>
  );
}
