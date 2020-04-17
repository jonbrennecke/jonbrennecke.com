import React, { useState } from 'react';
import styled from 'styled-components';
import {
  unit,
  maxWidth,
  Navigation,
  SideDrawer,
  Form,
} from '@portfolio/components';
import { ContactForm } from '../ContactForm';

const StyledNavigation = styled(Navigation)`
  padding: ${unit * 3}px ${unit * 5}px 0 ${unit * 5}px;
  max-width: ${maxWidth}px;
`;

const ContactFormContainer = styled(Form)`
  padding: ${unit * 10}px;
`;

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledNavigation>
      <SideDrawer
        open={showMenu}
        alignment="left"
        onClickOutside={() => setShowMenu(false)}
      >
        <ContactFormContainer contentStyle="light">
          <ContactForm />
        </ContactFormContainer>
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
