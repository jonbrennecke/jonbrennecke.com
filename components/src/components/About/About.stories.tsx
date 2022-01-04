import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { About } from './About';

const Image = styled.div`
  background-color: blue;
`;

storiesOf('UI', module).add('About', () => (
  <About>
    <About.TextContent>
      <About.Title>About me...</About.Title>
      <About.Body>
        I build and consult on mobile apps and websites. I have also made a few
        independently-developed apps like{' '}
        <a
          href="https://apps.apple.com/us/app/boca-portrait-mode-videos/id1478361742"
          target="_blank"
        >
          “BOCA”
        </a>{' '}
        and{' '}
        <a
          href="https://apps.apple.com/us/app/caption-this-video-subtitles/id1449087035"
          target="_blank"
        >
          "Caption This”
        </a>
        .
      </About.Body>
      &nbsp;
      <About.Body>
        I have been building apps in React and React Native since both platforms
        were first announced. In that time, I have worked as a consultant and
        full-time employee for many agencies and startups. I have also worked
        alongside well-known design consultancies and development studios. I am
        experienced in turning design deliverables into pixel-perfect user
        interfaces. I can hit the ground running on any project, whether as an
        individual contributor or technical leader. I offer high-contact
        personal service, customized around you and your company.
      </About.Body>
    </About.TextContent>
    <About.ImageContent>
      <Image />
    </About.ImageContent>
  </About>
));
