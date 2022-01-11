import React from 'react';
import { ContentStyle } from '../../types';
import { Navigation } from './Navigation';

export function NavigationStory({
  contentStyle = ContentStyle.dark,
}: {
  contentStyle: ContentStyle;
}) {
  const backgroundColor =
    contentStyle == ContentStyle.light ? 'black' : 'white';
  return (
    <div style={{ backgroundColor }}>
      <Navigation contentStyle={contentStyle}>
        <Navigation.MenuButton />
        <Navigation.Logo />
        <Navigation.Links>
          <Navigation.Link>Home</Navigation.Link>
          <Navigation.Link>Case Studies</Navigation.Link>
          <Navigation.Link>Process</Navigation.Link>
          <Navigation.LinkButton variant="primary" onClick={() => {}}>
            Contact
          </Navigation.LinkButton>
        </Navigation.Links>
      </Navigation>
    </div>
  );
}

NavigationStory.storyName = 'Navigation';

NavigationStory.argTypes = {
  contentStyle: {
    options: [ContentStyle.dark, ContentStyle.light],
    control: { type: 'radio' },
  },
};

export default {
  title: 'UI/Navigation',
  component: NavigationStory,
};
