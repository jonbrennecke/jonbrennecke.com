import {
  maxWidth,
  Navigation,
  unit,
  ContentStyle,
} from '@portfolio/components';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledNavigation = styled(Navigation)`
  padding: ${unit * 3}px ${unit * 5}px 0 ${unit * 5}px;
  max-width: ${maxWidth}px;
`;

export interface NavbarProps {
  contentStyle?: ContentStyle | keyof typeof ContentStyle;
  onClickMenuButton(): void;
  onClickContactButton(): void;
}

export const Navbar = ({
  contentStyle,
  onClickMenuButton,
  onClickContactButton,
}: NavbarProps) => (
  <StyledNavigation contentStyle={contentStyle}>
    <Navigation.MenuButton onClick={onClickMenuButton} />
    <Link href="/">
      <Navigation.Logo href="/" />
    </Link>
    <Navigation.Links>
      <Link href="/">
        <Navigation.Link href="/">Home</Navigation.Link>
      </Link>
      <Link href="/">
        <Navigation.Link href="/">Case Studies</Navigation.Link>
      </Link>
      <Link href="/">
        <Navigation.Link href="/">Process</Navigation.Link>
      </Link>
      <Navigation.LinkButton variant="primary" onClick={onClickContactButton}>
        Contact
      </Navigation.LinkButton>
    </Navigation.Links>
  </StyledNavigation>
);
