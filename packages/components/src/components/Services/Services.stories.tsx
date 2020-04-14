import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Services } from './Services';

const Container = styled.div``;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Services', () => (
    <Container>
      <Services>
        <Services.List>
          <Services.List.Item>
            <Services.Icons.Phone />
            <Services.List.Item.Title>
              Cross-platform mobile development
            </Services.List.Item.Title>
            <Services.List.Item.Description>
              Engage new audiences with a world-class native experience.
            </Services.List.Item.Description>
          </Services.List.Item>
          <Services.List.Item>
            <Services.Icons.Web />
            <Services.List.Item.Title>Web development</Services.List.Item.Title>
            <Services.List.Item.Description>
              Full-stack development for web platforms, marketing pages and
              everything in between.
            </Services.List.Item.Description>
          </Services.List.Item>
          <Services.List.Item>
            <Services.Icons.Server />
            <Services.List.Item.Title>
              Deployment, automation and QA
            </Services.List.Item.Title>
            <Services.List.Item.Description>
              Scale your team to new levels with continuous integration
              solutions designed just for you.
            </Services.List.Item.Description>
          </Services.List.Item>
        </Services.List>
      </Services>
    </Container>
  ));
