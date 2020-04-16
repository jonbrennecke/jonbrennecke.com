import React from 'react';
import styled from 'styled-components';
import { offWhite, unit, trueBlack } from '../../styles';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Text } from '../Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Heading)`
  font-size: ${unit * 4}px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${unit * 2}px 0;
`;

const Note = styled(Text)`
  display: block;
  position: relative;
  padding: ${unit * 1.5}px ${unit * 3}px;
  margin: ${unit * 3}px 0;

  a {
    color: ${trueBlack};
    font-weight: bold;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: blue;
    width: 1px;
  }
`;

const Label = styled.label`
  font-family: 'Cabin', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding: 0 0 ${unit}px ${unit * 3}px;
`;

const FormInput = styled(Input)`
  padding: ${unit * 1.5}px ${unit * 3}px;
  background-color: ${offWhite};
`;

export interface FormSubComponents {
  Title: typeof Title;
  Field: typeof Field;
  Label: typeof Label;
  Input: typeof FormInput;
  Note: typeof Note;
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
Form.Field = Field;
Form.Label = Label;
Form.Input = FormInput;
Form.Note = Note;
