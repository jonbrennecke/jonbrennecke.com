import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { CheckList } from './CheckList';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('CheckList', () => (
    <CheckList>
      <CheckList.Item>Mobile App Development</CheckList.Item>
      <CheckList.Item>Mobile App Design</CheckList.Item>
      <CheckList.Item>Wireframing</CheckList.Item>
      <CheckList.Item>Web Development</CheckList.Item>
      <CheckList.Item>Web Design</CheckList.Item>
      <CheckList.Item>Consulting & Strategy</CheckList.Item>
    </CheckList>
  ));
