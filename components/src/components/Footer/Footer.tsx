import React from 'react';
import styled from 'styled-components';
import { JonLogo } from '../JonLogo';
import { unit, offWhite, maxWidth, blue, mediumBlue } from '../../styles';
import { Text } from '../Text';

const Container = styled.footer`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${offWhite};
  padding: ${unit * 7}px;
  min-height: ${unit * 75}px;
`;

const Logo = styled((props) => <JonLogo contentStyle="dark" {...props} />)`
  max-width: ${unit * 30}px;
  width: 100%;
  position: relative;
  top: 10px;
  padding-top: ${unit * 7}px;

  path {
    fill: ${mediumBlue};
  }
`;

const FootNotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${unit * 10}px;
  width: 100%;
  max-width: ${maxWidth}px;

  & > * {
    padding: 0 ${unit * 3}px;
  }

  & > *:first-child {
    padding-left: 0;
  }

  & > *:last-child {
    padding-right: 0;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FootNote = styled(Text)`
  font-size: ${unit * 2}px;
  color: ${blue};

  a {
    color: ${blue};
    font-weight: bold;
  }
`;

export interface FooterSubComponents {
  Logo: typeof Logo;
  FootNotes: typeof FootNotes;
  FootNote: typeof FootNote;
}

export interface FooterProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export const Footer: React.FC<FooterProps> & FooterSubComponents = ({
  children,
  className,
}: FooterProps) => <Container className={className}>{children}</Container>;

Footer.Logo = Logo;
Footer.FootNote = FootNote;
Footer.FootNotes = FootNotes;
