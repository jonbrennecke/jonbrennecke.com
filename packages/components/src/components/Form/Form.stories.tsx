import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Form } from './Form';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Form', () => (
    <Form>
      <Form.Title>Let's talk!</Form.Title>
    </Form>
  ));
