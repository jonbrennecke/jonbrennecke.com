import { Form } from '@portfolio/components';
import React, { useReducer, useState } from 'react';
import {
  contactFormReducer,
  ContactFormStateRecord,
  setDescription,
  setEmail,
  setName,
} from './contactFormState';
import { submitContactFormResponse } from './contactFormRequests';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

export const ContactForm = () => {
  const [state, dispatch] = useReducer(
    contactFormReducer,
    ContactFormStateRecord()
  );
  const [disabled, setDisabled] = useState(false);
  return (
    <StyledForm
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          setDisabled(true);
          await submitContactFormResponse(state);
          alert(
            "Your request has been submitted. I'll get back to you shortly."
          );
        } catch {
          alert(
            'There was a problem submitting your request. Please try again.'
          );
        } finally {
          setDisabled(false);
        }
      }}
    >
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
          required
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
          required
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
      <Form.Button variant="primary" size="large" disabled={disabled}>
        Send
      </Form.Button>
    </StyledForm>
  );
};
