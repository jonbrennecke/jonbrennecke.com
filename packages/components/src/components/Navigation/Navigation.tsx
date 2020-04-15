import React from 'react';
import styled from 'styled-components';
import { unit, transparent } from '../../styles';
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

export interface NavigationSubComponents {
  Logo: typeof Logo;
  Links: typeof Links;
  Link: typeof Link;
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
