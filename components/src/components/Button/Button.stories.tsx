import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { unit } from '../../styles';

const Container = styled.div`
  padding: ${unit}px;
`;

const ItemContainer = styled.div`
  padding: ${unit}px;
`;

storiesOf('UI', module)
  .add('Button', () => (
    <Container>
      {[
        <Button size="small">Lorem ipsum solor sit amet</Button>,
        <Button size="medium">Lorem ipsum solor sit amet</Button>,
        <Button size="large">Lorem ipsum solor sit amet</Button>,
        <Button size="small" variant="primary">
          Lorem ipsum solor sit amet
        </Button>,
        <Button size="medium" variant="primary">
          Lorem ipsum solor sit amet
        </Button>,
        <Button size="large" variant="primary">
          Lorem ipsum solor sit amet
        </Button>,
        <Button size="large" variant="primary" disabled>
          Lorem ipsum solor sit amet
        </Button>
      ].map((button, i) => (
        <ItemContainer key={i}>{button}</ItemContainer>
      ))}
    </Container>
  ));
