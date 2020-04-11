import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { PhoneFrame } from './PhoneFrame';

const Container = styled.div``;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('PhoneFrame', () => <PhoneFrame />);
