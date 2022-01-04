import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Services } from './Services';

const Container = styled.div``;

storiesOf('UI', module).add('Services', () => (
  <Container>
    <Services>
      <Services.Item>
        <Services.Icons.Phone />
        <Services.Item.Title>
          Cross-platform mobile development
        </Services.Item.Title>
        <Services.Item.Description>
          Engage new audiences with a world-class native experience.
        </Services.Item.Description>
      </Services.Item>
      <Services.Item>
        <Services.Icons.Web />
        <Services.Item.Title>Web development</Services.Item.Title>
        <Services.Item.Description>
          Full-stack development for web platforms, marketing pages and
          everything in between.
        </Services.Item.Description>
      </Services.Item>
      <Services.Item>
        <Services.Icons.Server />
        <Services.Item.Title>Deployment, automation and QA</Services.Item.Title>
        <Services.Item.Description>
          Scale your team to new levels with continuous integration solutions
          designed just for you.
        </Services.Item.Description>
      </Services.Item>
    </Services>
  </Container>
));
