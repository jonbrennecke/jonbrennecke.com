import React from 'react';
import { Page } from '../../src/components';
import styled from 'styled-components';
import { maxWidth } from '@portfolio/components';

const BodyContainer = styled.div`
  max-width: ${maxWidth}px;
`;

const IUBENDA_TERMS_AND_CONDITIONS_URL =
  'https://www.iubenda.com/api/terms-and-conditions/70209080';

export default function CollageCreatorTermsAndConditions({
  termsAndConditionsHTML,
}: {
  termsAndConditionsHTML: string;
}) {
  return (
    <Page contentStyle="dark" showLoadingBanner={false}>
      {() => (
        <BodyContainer>
          <article
            className="prose mx-auto mt-32"
            dangerouslySetInnerHTML={{ __html: termsAndConditionsHTML }}
          />
        </BodyContainer>
      )}
    </Page>
  );
}

async function fetchTermsAndConditions(): Promise<string> {
  const result = await fetch(IUBENDA_TERMS_AND_CONDITIONS_URL);
  if (result.status !== 200) {
    throw new Error(
      `Failed to fetch terms and conditions from ${IUBENDA_TERMS_AND_CONDITIONS_URL}`
    );
  }
  const { content } = await result.json();
  return content;
}

CollageCreatorTermsAndConditions.getInitialProps = async () => {
  const termsAndConditionsHTML = await fetchTermsAndConditions();
  return {
    termsAndConditionsHTML,
  };
};
