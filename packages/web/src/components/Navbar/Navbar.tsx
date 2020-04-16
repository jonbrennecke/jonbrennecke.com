import React, { useState } from 'react';
import styled from 'styled-components';
import { unit, maxWidth, Navigation, SideDrawer } from '@portfolio/components';

const StyledNavigation = styled(Navigation)`
  padding: ${unit * 3}px ${unit * 5}px 0 ${unit * 5}px;
  max-width: ${maxWidth}px;
`;

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledNavigation>
      <SideDrawer open={showMenu} alignment="left">
        {/* TODO */}
      </SideDrawer>
      <Navigation.MenuButton onClick={() => setShowMenu(!showMenu)} />
      <Navigation.Logo />
      <Navigation.Links>
        <Navigation.Link>Home</Navigation.Link>
        <Navigation.Link>Case Studies</Navigation.Link>
        <Navigation.Link>Process</Navigation.Link>
        <Navigation.Link variant="primary">Contact</Navigation.Link>
      </Navigation.Links>
    </StyledNavigation>
  );
};
