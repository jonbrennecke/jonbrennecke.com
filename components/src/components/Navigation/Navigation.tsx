import React, { forwardRef } from "react";
import styled from "styled-components";
import { unit, transparent, trueBlack, opacity, darkGreen } from "../../styles";
import { JonLogo } from "../JonLogo";
import { ITextProps, Text } from "../Text";
import { Button, EButtonVariant, buttonBackgroundColors } from "../Button";

const Container = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr max-content;
  grid-template-areas: "menu logo links";
  align-items: center;
`;

const Logo = styled((props) => <JonLogo contentStyle="dark" {...props} />)`
  max-width: ${unit * 15}px;
  width: 100%;
  position: relative;
  top: 10px;
  grid-area: logo;
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: links;
`;

const LinkContainer = styled.li`
  list-style-type: none;
  padding: ${unit}px ${unit * 2}px;

  &:last-child {
    padding-right: 0;
  }
`;

const StyledLink = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: ${trueBlack};

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

interface LinkProps {
  children?: ITextProps["children"];
  href: string;
}

// forwardRef is added so that Next can wrap the link
const Link = forwardRef(
  (
    { children, href }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <LinkContainer>
      <StyledLink href={href} ref={ref}>
        <Text weight="bold">{children}</Text>
      </StyledLink>
    </LinkContainer>
  )
);

const linkButtonBackgroundColors = {
  ...buttonBackgroundColors,
  [EButtonVariant.default]: transparent,
};

const StyledLinkButton = styled(Button)`
  background-color: ${(props) =>
    linkButtonBackgroundColors[props.variant || EButtonVariant.default]};
`;

interface LinkButtonProps {
  children?: ITextProps["children"];
  variant?: EButtonVariant | keyof typeof EButtonVariant;
  onClick(): void;
}

const LinkButton = ({ children, variant, onClick }: LinkButtonProps) => (
  <LinkContainer>
    <StyledLinkButton variant={variant} onClick={onClick}>
      {children}
    </StyledLinkButton>
  </LinkContainer>
);

const MenuIcon = styled((props) => (
  <svg viewBox="0 0 50 22" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-156.000000, -91.000000)" fill={trueBlack}>
        <g transform="translate(1, 1)">
          <g transform="translate(157.000000, 91.000000)">
            <g transform="translate(0.000000, 0.932773)">
              <rect x="0" y="0" width="44.4" height="4.50630252" rx="2"></rect>
              <rect
                x="0"
                y="12.1323529"
                width="30.3"
                height="4.50630252"
                rx="2"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
))`
  width: ${unit * 6}px;
`;

const MenuButton = styled(
  (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => (
    <button {...props}>
      <MenuIcon />
    </button>
  )
)`
  padding: 0 ${unit * 10}px 0 0;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border-width: 0;
  cursor: pointer;
  grid-area: menu;
  background: none;

  rect {
    stroke-width: 0;
    transition: 0.2s all ease-in-out;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export interface NavigationSubComponents {
  Logo: typeof Logo;
  Links: typeof Links;
  Link: typeof Link;
  LinkButton: typeof LinkButton;
  MenuButton: typeof MenuButton;
}

export interface NavigationProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> &
  NavigationSubComponents = ({ children, className }: NavigationProps) => (
  <Container className={className}>{children}</Container>
);

Navigation.Logo = Logo;
Navigation.Links = Links;
Navigation.Link = Link;
Navigation.LinkButton = LinkButton;
Navigation.MenuButton = MenuButton;
