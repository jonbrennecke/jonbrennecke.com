import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Form } from './Form';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Form', () => (
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
        <Form.Input placeholder="John from Google..." />
      </Form.Field>
      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Input placeholder="john@google.com" />
      </Form.Field>
      <Form.Field>
        <Form.Label>Project Description</Form.Label>
        <Form.Input placeholder="We need help to redesign our app..." />
      </Form.Field>
    </Form>
  ));
