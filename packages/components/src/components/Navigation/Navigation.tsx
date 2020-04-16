import React from 'react';
import styled from 'styled-components';
import { unit, transparent, trueBlack, opacity } from '../../styles';
import { JonLogo } from '../JonLogo';
import { ITextProps, Text } from '../Text';
import { Button, EButtonVariant, buttonBackgroundColors } from '../Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled((props) => <JonLogo contentStyle="dark" {...props} />)`
  max-width: ${unit * 15}px;
  width: 100%;
  position: relative;
  top: 10px;
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LinkContainer = styled.li`
  list-style-type: none;
  padding: ${unit}px ${unit * 2}px;

  &:last-child {
    padding-right: 0;
  }
`;

const linkButtonBackgroundColors = {
  ...buttonBackgroundColors,
  [EButtonVariant.default]: transparent,
};

const LinkButton = styled(Button)`
  background-color: ${(props) =>
    linkButtonBackgroundColors[props.variant || EButtonVariant.default]};
`;

interface LinkProps {
  children?: ITextProps['children'];
  variant?: EButtonVariant | keyof typeof EButtonVariant;
  onClick?(): void;
}

const Link = ({ children, variant, onClick }: LinkProps) => (
  <LinkContainer>
    <LinkButton variant={variant} onClick={onClick}>
      {children}
    </LinkButton>
  </LinkContainer>
);

const MenuIcon = styled((props) => (
  <svg viewBox="0 0 50 22" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-156.000000, -91.000000)" fill={trueBlack}>
        <g transform="translate(1, 1)">
          <g transform="translate(157.000000, 91.000000)">
            <g transform="translate(0.000000, 0.932773)">
              <rect x="0" y="0" width="44.4" height="4.50630252" rx="1"></rect>
              <rect
                x="0"
                y="12.1323529"
                width="30.3"
                height="4.50630252"
                rx="1"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
))`
  max-width: ${unit * 6}px;
  width: 100%;
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
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border-width: 0;
  cursor: pointer;

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
Navigation.MenuButton = MenuButton;
