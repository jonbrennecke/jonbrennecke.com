import {
  curativeBlue30,
  curativeBlue50,
  PhoneScene,
} from "@portfolio/components";
import React from "react";
import styled from "styled-components";
import { Page } from "../../src/components";
import iPhoneScreenshot from "../../../assets/images/Simulator_Screen_Shot.png";

const Hero = styled.div`
  display: flex;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-35deg, ${curativeBlue50}, ${curativeBlue30});
    z-index: -1;
  }
`;

export default function CollageCreator() {
  return (
    <Page contentStyle="light">
      {() => (
        <Hero>
          <PhoneScene imageSource={iPhoneScreenshot.src} />
        </Hero>
      )}
    </Page>
  );
}
