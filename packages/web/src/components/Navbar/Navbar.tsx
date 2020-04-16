import React from 'react';
import styled from 'styled-components';
import { unit, maxWidth, Navigation } from '@portfolio/components';

const StyledNavigation = styled(Navigation)`
  padding: ${unit * 3}px ${unit * 5}px 0 ${unit * 5}px;
  max-width: ${maxWidth}px;
`;

export const Navbar = () => (
  <StyledNavigation>
    <Navigation.Logo />
    <Navigation.Links>
      <Navigation.Link>Home</Navigation.Link>
      <Navigation.Link>Case Studies</Navigation.Link>
      <Navigation.Link>Process</Navigation.Link>
      <Navigation.Link variant="primary">Contact</Navigation.Link>
    </Navigation.Links>
  </StyledNavigation>
);
