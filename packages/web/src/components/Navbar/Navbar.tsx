import React, { useState } from 'react';
import styled from 'styled-components';
import {
  unit,
  maxWidth,
  Navigation,
  SideDrawer,
  Form,
} from '@portfolio/components';

const StyledNavigation = styled(Navigation)`
  padding: ${unit * 3}px ${unit * 5}px 0 ${unit * 5}px;
  max-width: ${maxWidth}px;
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
        <Form>
          <Form.Title>Let's work together!</Form.Title>
          <Form.Note>
            Want to chat? Shoot me an email at{' '}
            <a href="mailto:jpbrennecke@gmail.com" target="_blank">
              jpbrennecke@gmail.com
            </a>
          </Form.Note>
          <Form.Field>
            <Form.Label>Name & Company</Form.Label>
            <Form.Input
              autoFocus={false}
              name="name"
              placeholder="John from Google..."
            />
          </Form.Field>
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Input
              autoFocus={false}
              name="email"
              placeholder="john@google.com"
            />
          </Form.Field>
          <Form.Field>
            <Form.Label>Project Description</Form.Label>
            <Form.TextArea
              autoFocus={false}
              placeholder="We need help redesigning our app..."
            />
          </Form.Field>
          <Form.Button variant="primary" size="large">
            Send
          </Form.Button>
        </Form>
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
