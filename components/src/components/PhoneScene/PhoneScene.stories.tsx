import React from "react";
import { PhoneScene } from "./PhoneScene";

export function PhoneSceneStory() {
  return <PhoneScene />;
}

PhoneSceneStory.storyName = "PhoneScene";

export default {
  title: "3D/PhoneScene",
  component: PhoneSceneStory,
};
