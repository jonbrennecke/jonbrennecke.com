import React from 'react';
import styled from 'styled-components';
import { JonLogo } from '../JonLogo';
import { unit, offWhite, trueWhite } from '../../styles';
import { Text } from '../Text';

const Container = styled.footer`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${offWhite};
  padding: ${unit * 7}px;
`;

const Logo = styled((props) => <JonLogo contentStyle="dark" {...props} />)`
  max-width: ${unit * 30}px;
  width: 100%;
  position: relative;
  top: 10px;

  path {
    fill: ${trueWhite};
  }
`;

const FootNotes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${unit * 10}px;
  width: 100%;

  & > * {
    padding: 0 ${unit * 3}px;
  }

  & > *:first-child {
    padding-left: 0;
  }

  & > *:last-child {
    padding-right: 0;
  }
`;

const FootNote = styled(Text)`
  font-size: ${unit * 2}px;
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
