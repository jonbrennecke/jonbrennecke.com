import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from './SectionHeader';

const Container = styled.div``;

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .add('SectionHeader', () => (
    <Container>
      <SectionHeader>
        <SectionHeader.SubTitle>Case</SectionHeader.SubTitle>
        <SectionHeader.Title>Studies</SectionHeader.Title>
        <SectionHeader.Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
          justo sed urna tincidunt condimentum.
        </SectionHeader.Paragraph>
      </SectionHeader>
    </Container>
  ));
