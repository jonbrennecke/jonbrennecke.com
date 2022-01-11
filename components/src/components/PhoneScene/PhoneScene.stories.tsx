import React from "react";
import { PhoneScene } from "./PhoneScene";
import simulatorScreenShot from "../../../../assets/images/Simulator_Screen_Shot.png";

export function PhoneSceneStory() {
  return <PhoneScene imageSource={simulatorScreenShot} />;
}

PhoneSceneStory.storyName = "PhoneScene";

export default {
  title: "3D/PhoneScene",
  component: PhoneSceneStory,
};
