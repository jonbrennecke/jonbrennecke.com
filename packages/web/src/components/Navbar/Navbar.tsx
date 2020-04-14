import React from 'react';
import styled from 'styled-components';
import { unit, Navigation } from '@portfolio/components';

const StyledNavigation = styled(Navigation)`
  padding: 0 ${unit * 5}px;
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
