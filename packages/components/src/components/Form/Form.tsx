import React from 'react';
import styled from 'styled-components';
import {
  offWhite,
  trueBlack,
  unit,
  trueWhite,
  opacity,
  blue,
} from '../../styles';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Text } from '../Text';
import { TextArea } from '../TextArea';
import { Button } from '../Button';

export enum FormContentStyle {
  light = 'light',
  dark = 'dark',
}

const Title = styled(Heading)`
  font-size: ${unit * 8}px;
  padding-bottom: ${unit * 3}px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${unit * 2}px 0;
  width: 100%;
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
    background-color: ${blue};
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

const FormTextArea = styled(TextArea)`
  padding: ${unit * 1.5}px ${unit * 3}px;
  background-color: ${offWhite};
`;

const FormButton = styled(Button)`
  text-transform: uppercase;
  margin-top: ${unit}px;
  display: inline-block;
`;

const Container = styled.div<{
  contentStyle: FormContentStyle | keyof typeof FormContentStyle;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    color: ${trueWhite};
  }

  ${Note} {
    color: ${trueWhite};

    a {
      color: ${trueWhite};
    }

    &::before {
      background-color: ${trueWhite};
    }
  }

  ${Title} {
    color: ${trueWhite};
  }

  input,
  textarea {
    background-color: ${opacity(trueWhite, 0.1)};
    color: ${trueWhite};

    &::placeholder {
      opacity: 0.5;
    }
  }
`;

export interface FormSubComponents {
  Title: typeof Title;
  Field: typeof Field;
  Label: typeof Label;
  Input: typeof FormInput;
  Note: typeof Note;
  TextArea: typeof FormTextArea;
  Button: typeof FormButton;
}

export interface FormProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
  contentStyle?: FormContentStyle | keyof typeof FormContentStyle;
}

export const Form: React.FC<FormProps> & FormSubComponents = ({
  children,
  className,
  contentStyle = FormContentStyle.dark,
}: FormProps) => (
  <Container contentStyle={contentStyle} className={className}>
    {children}
  </Container>
);

Form.Title = Title;
Form.Field = Field;
Form.Label = Label;
Form.Input = FormInput;
Form.Note = Note;
Form.TextArea = FormTextArea;
Form.Button = FormButton;
