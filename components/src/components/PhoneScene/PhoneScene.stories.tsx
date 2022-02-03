import React from 'react';
import { PhoneScene } from './PhoneScene';
import simulatorScreenShot from '../../../../assets/images/collage_creator_marketing_image_primary.png';

export function PhoneSceneStory() {
  return <PhoneScene imageSource={simulatorScreenShot} />;
}

PhoneSceneStory.storyName = 'PhoneScene';

export default {
  title: '3D/PhoneScene',
  component: PhoneSceneStory,
};
