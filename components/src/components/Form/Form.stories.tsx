import { useState } from '@storybook/addons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { trueBlack, trueWhite, unit } from '../../styles';
import { Form, FormContentStyle } from './Form';

const Container = styled.div<{ formContentStyle: FormContentStyle }>`
  display: flex;
  flex: 1;
  background-color: ${(props) =>
    props.formContentStyle === FormContentStyle.dark ? trueWhite : trueBlack};
  padding: ${unit * 5}px;

  & > svg {
    display: flex;
    flex: 1;
  }
`;

export function FormStory({
  contentStyle = FormContentStyle.light,
}: {
  contentStyle: FormContentStyle;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  return (
    <Container formContentStyle={contentStyle}>
      <Form contentStyle={contentStyle}>
        <Form.Title>Let's talk!</Form.Title>
        <Form.Note>
          Want to chat? Shoot me an email at{' '}
          <a href="mailto:jpbrennecke@gmail.com" target="_blank">
            jpbrennecke@gmail.com
          </a>
        </Form.Note>
        <Form.Field>
          <Form.Label>Name & Company</Form.Label>
          <Form.Input
            value={name}
            onChangeValue={setName}
            placeholder="John from Google..."
          />
        </Form.Field>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Input
            value={email}
            onChangeValue={setEmail}
            placeholder="john@google.com"
          />
        </Form.Field>
        <Form.Field>
          <Form.Label>Project Description</Form.Label>
          <Form.TextArea
            value={description}
            onChangeValue={setDescription}
            placeholder="We need help to redesign our app..."
          />
        </Form.Field>
        <Form.Button variant="primary" size="large">
          Send
        </Form.Button>
      </Form>
    </Container>
  );
}

FormStory.storyName = 'Form';

FormStory.argTypes = {
  contentStyle: {
    options: [FormContentStyle.dark, FormContentStyle.light],
    control: { type: 'radio' },
  },
};

export default {
  title: 'UI',
  component: FormStory,
};
