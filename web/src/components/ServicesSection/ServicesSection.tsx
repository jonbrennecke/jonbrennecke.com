import React from 'react';
import { unit, Services, SectionHeader, maxWidth } from '@portfolio/components';
import styled from 'styled-components';

const StyledServicesContainer = styled(Services)`
  padding: ${unit * 15}px ${unit * 5}px;
  max-width: ${maxWidth}px;
`;

const StyledSectionHeader = styled(SectionHeader)`
  padding: ${unit * 7}px 0 ${unit * 15}px 0;
`;

export const ServicesSection = () => (
  <StyledServicesContainer>
    <StyledSectionHeader>
      <SectionHeader.SubTitle>Always at your service</SectionHeader.SubTitle>
      <SectionHeader.Title>Services</SectionHeader.Title>
      <SectionHeader.Paragraph>
        Looking for something not mentioned here? Contact me for more
        information.
      </SectionHeader.Paragraph>
    </StyledSectionHeader>
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
        Full-stack development for web platforms, marketing pages and everything
        in between.
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
  </StyledServicesContainer>
);
