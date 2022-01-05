import { maxWidth, Navigation, unit } from "@portfolio/components";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNavigation = styled(Navigation)`
  padding: ${unit * 3}px ${unit * 5}px 0 ${unit * 5}px;
  max-width: ${maxWidth}px;
`;

export interface NavbarProps {
  onClickMenuButton(): void;
  onClickContactButton(): void;
}

export const Navbar = ({
  onClickMenuButton,
  onClickContactButton,
}: NavbarProps) => (
  <StyledNavigation>
    <Navigation.MenuButton onClick={onClickMenuButton} />
    <Navigation.Logo />
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
