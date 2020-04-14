import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { CaseStudies, Capabilities, Navbar } from './components';
import { unit, Services } from '@portfolio/components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${unit * 3}px;

  & > * {
    max-width: 1024px;
    width: 100%;
  }
`;

export const App = hot(() => (
  <Container>
    <Navbar />
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
    <Capabilities />
    <CaseStudies />
  </Container>
));
