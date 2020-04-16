import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Form } from './Form';
import { useState } from '@storybook/addons';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Form', () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    return (
      <Form>
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
    );
  });
