import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { unit } from '../../styles';

const Container = styled.div``;

const Title = styled(Heading)`
  font-size: ${unit * 4}px;
`;

export interface FormSubComponents {
  Title: typeof Title;
}

export interface FormProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export const Form: React.FC<FormProps> & FormSubComponents = ({
  children,
  className,
}: FormProps) => <Container className={className}>{children}</Container>;

Form.Title = Title;
