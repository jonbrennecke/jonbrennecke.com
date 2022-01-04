import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { ETextWeight, Text } from '..';

const Container = styled.div``;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('Text', () => (
    <Container>
      <Text
        weight={select(
          'Weight',
          {
            Bold: ETextWeight.bold,
            Medium: ETextWeight.medium,
            Regular: ETextWeight.regular,
          },
          ETextWeight.regular
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
        justo sed urna tincidunt condimentum. Integer ullamcorper urna sed nunc
        condimentum egestas. Aliquam eget tortor sit amet lacus ullamcorper
        pellentesque. Praesent tempor pellentesque lectus, ut egestas tortor
        rutrum eu. Mauris sit amet massa vitae nisl aliquet congue. Vestibulum
        non lectus eget dui accumsan sagittis. Pellentesque non eros ultricies,
        blandit tortor non, aliquam augue.{' '}
      </Text>
    </Container>
  ));
