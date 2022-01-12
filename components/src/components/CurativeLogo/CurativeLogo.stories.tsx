import React from 'react';
import { ContentStyle } from '../../types';
import { CurativeLogo } from './CurativeLogo';

export function CurativeLogoStory({
  contentStyle = ContentStyle.dark,
}: {
  contentStyle: ContentStyle;
}) {
  return <CurativeLogo contentStyle={contentStyle} />;
}

CurativeLogoStory.storyName = 'Standard';

CurativeLogoStory.argTypes = {
  contentStyle: {
    options: [ContentStyle.dark, ContentStyle.light],
    control: { type: 'radio' },
  },
};

export default {
  title: 'Logos/Curative/Standard',
  component: CurativeLogoStory,
};
