import { Form } from '@portfolio/components';
import React, { useReducer } from 'react';
import {
  contactFormReducer,
  ContactFormStateRecord,
  setDescription,
  setEmail,
  setName,
} from './contactFormState';

export const ContactForm = () => {
  const [state, dispatch] = useReducer(
    contactFormReducer,
    ContactFormStateRecord()
  );
  return (
    <>
      <Form.Title>Let's work together!</Form.Title>
      <Form.Note>
        Want to chat? Shoot me an email at{' '}
        <a href="mailto:jpbrennecke@gmail.com" target="_blank">
          jpbrennecke@gmail.com
        </a>
      </Form.Note>
      <Form.Field>
        <Form.Label>Name & Company</Form.Label>
        <Form.Input
          autoFocus={false}
          name="name"
          placeholder="John from Google..."
          value={state.name}
          onChangeValue={(name) => dispatch(setName(name))}
        />
      </Form.Field>
      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Input
          autoFocus={false}
          name="email"
          placeholder="john@google.com"
          value={state.email}
          onChangeValue={(email) => dispatch(setEmail(email))}
        />
      </Form.Field>
      <Form.Field>
        <Form.Label>Project Description</Form.Label>
        <Form.TextArea
          autoFocus={false}
          placeholder="We need help redesigning our app..."
          value={state.description}
          onChangeValue={(description) => dispatch(setDescription(description))}
        />
      </Form.Field>
      <Form.Button variant="primary" size="large">
        Send
      </Form.Button>
    </>
  );
};
