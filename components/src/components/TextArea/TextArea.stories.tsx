import { useState } from '@storybook/addons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { unit } from '../../styles';
import { TextArea } from './TextArea';

const Container = styled.div`
  padding: ${unit}px;
  align-items: center;
`;

storiesOf('UI', module)
  .add('Text Area', () => {
    const [value, setValue] = useState('');
    return (
      <Container>
        <form
          onSubmit={(e) => {
            alert(`Form submitted ${value}`);
            e.preventDefault();
          }}
        >
          <TextArea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            value={value}
            onChangeValue={setValue}
          />
        </form>
      </Container>
    );
  });
