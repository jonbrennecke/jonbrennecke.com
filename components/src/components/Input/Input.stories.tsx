import { useState } from '@storybook/addons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { unit } from '../../styles';
import { Input } from './Input';

const Container = styled.div`
  padding: ${unit}px;
  align-items: center;
`;

storiesOf('UI', module).add('Input', () => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <form
        onSubmit={(e) => {
          alert(`Form submitted ${value}`);
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Start typing..."
          value={value}
          onChangeValue={setValue}
        />
      </form>
    </Container>
  );
});
