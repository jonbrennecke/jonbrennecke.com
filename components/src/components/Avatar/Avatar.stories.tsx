import React from 'react';
import { Avatar } from './Avatar';

export function AvatarStory() {
  return (
    <Avatar.Container>
      <Avatar src="https://github.com/jonbrennecke.png" />
      <Avatar.Text>
        <h2>Jon Brennecke</h2>
        <p>
          <strong>Senior Fullstack Software Engineer</strong>
        </p>
        <p>Team Lead, Patient Experience Team</p>
      </Avatar.Text>
    </Avatar.Container>
  );
}

AvatarStory.storyName = 'Avatar';

export default {
  title: 'UI/Avatar',
  component: AvatarStory,
};
