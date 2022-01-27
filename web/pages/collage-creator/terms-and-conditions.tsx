import React from 'react';
import { Page } from '../../src/components';
import styled from 'styled-components';
import { maxWidth } from '@portfolio/components';

const BodyContainer = styled.div`
  max-width: ${maxWidth}px;
`;

export default function CollageCreatorTermsAndConditions() {
  return (
    <Page contentStyle="light">
      {() => (
        <BodyContainer>
          <h1>Terms and Conditions</h1>
        </BodyContainer>
      )}
    </Page>
  );
}
