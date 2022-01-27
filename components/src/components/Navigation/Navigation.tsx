import React, { forwardRef, createContext, useContext } from 'react';
import styled from 'styled-components';
import { transparent, trueBlack, trueWhite, unit } from '../../styles';
import { ContentStyle } from '../../types';
import { Button, buttonBackgroundColors, EButtonVariant } from '../Button';
import { JonLogo } from '../JonLogo';
import { ITextProps, Text } from '../Text';

interface NavigationContextObject {
  contentStyle: ContentStyle;
}

const NavigationContext = createContext<NavigationContextObject>({
  contentStyle: ContentStyle.dark,
});

const useNavigationContext = () => useContext(NavigationContext);

const navigationTextColors = {
  [ContentStyle.light]: trueWhite,
  [ContentStyle.dark]: trueBlack,
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: min-content 1fr max-content;
    grid-template-areas: 'menu logo links';
    align-items: center;
  }
`;

const LogoLink = styled.a`
  cursor: pointer;
`;

type LogoProps = Pick<
  React.HTMLProps<HTMLAnchorElement>,
  'className' | 'href' | 'rel'
>;

const Logo = (props: LogoProps) => {
  const { contentStyle } = useNavigationContext();
  return (
    <LogoLink {...props}>
      <StyledLogo contentStyle={contentStyle} />
    </LogoLink>
  );
};

const StyledLogo = styled(JonLogo)`
  max-width: ${unit * 15}px;
  min-width: ${unit * 10}px;
  width: 100%;
  position: relative;
  top: 10px;
  grid-area: logo;
`;

const Links = styled.ul`
  display: none;

  @media (min-width: 640px) {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-evenly;
    align-items: center;
    grid-area: links;
  }
`;

const LinkContainer = styled.li`
  list-style-type: none;
  padding: ${unit}px ${unit * 2}px;

  &:last-child {
    padding-right: 0;
  }
`;

const StyledLink = styled.a<{ color?: string }>`
  background-color: transparent;
  text-decoration: none;
  color: ${(props) => props.color ?? trueBlack};

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

interface LinkProps {
  children?: ITextProps['children'];
  href?: string;
}

// forwardRef is added so that Next can wrap the link
const Link = forwardRef(
  (
    { children, href }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const { contentStyle } = useNavigationContext();
    const color = navigationTextColors[contentStyle];
    return (
      <LinkContainer>
        <StyledLink href={href} ref={ref} color={color}>
          <Text weight="bold" color={color}>
            {children}
          </Text>
        </StyledLink>
      </LinkContainer>
    );
  }
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
  children?: ITextProps['children'];
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
      <g transform="translate(-156.000000, -91.000000)">
        <g transform="translate(1, 1)">
          <g transform="translate(157.000000, 91.000000)">
            <g transform="translate(0.000000, 0.932773)">
              <rect x="0" y="0" width="44.4" height="4.50630252" rx="2" />
              <rect
                x="0"
                y="12.1323529"
                width="30.3"
                height="4.50630252"
                rx="2"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
))`
  width: ${unit * 6}px;
`;

const MenuButton = ({ onClick }: { onClick?(): void }) => {
  const { contentStyle } = useNavigationContext();
  const fillColor = navigationTextColors[contentStyle];
  return (
    <StyledMenuButton fill={fillColor} onClick={onClick}>
      <MenuIcon />
    </StyledMenuButton>
  );
};

const StyledMenuButton = styled.button<{ fill: string }>`
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

  svg > * {
    fill: ${(props) => props.fill};
  }

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
  contentStyle?: ContentStyle | keyof typeof ContentStyle;
}

export const Navigation: React.FC<NavigationProps> &
  NavigationSubComponents = ({
  children,
  className,
  contentStyle,
}: NavigationProps) => (
  <NavigationContext.Provider
    value={{
      contentStyle: (contentStyle as ContentStyle) ?? ContentStyle.dark,
    }}
  >
    <Container className={className}>{children}</Container>
  </NavigationContext.Provider>
);

Navigation.Logo = Logo;
Navigation.Links = Links;
Navigation.Link = Link;
Navigation.LinkButton = LinkButton;
Navigation.MenuButton = MenuButton;
