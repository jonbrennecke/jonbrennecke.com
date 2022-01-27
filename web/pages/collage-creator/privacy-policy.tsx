import React, { useEffect, useRef } from 'react';
import { Page } from '../../src/components';
import styled from 'styled-components';
import { maxWidth } from '@portfolio/components';

const BodyContainer = styled.div`
  max-width: ${maxWidth}px;
`;

const IUBENDA_PRIVACY_POLICY_URL =
  'https://www.iubenda.com/api/privacy-policy/70209080/no-markup';

export default function CollageCreatorPrivacyPolicyPage() {
  const policyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function asyncEffect() {
      const result = await fetch(IUBENDA_PRIVACY_POLICY_URL);
      if (result.status !== 200) {
        return;
      }
      const { content } = await result.json();
      if (policyContainerRef.current) {
        policyContainerRef.current.innerHTML = content;
      }
    }

    asyncEffect();
  }, []);

  return (
    <Page contentStyle="dark">
      {() => (
        <BodyContainer>
          <div ref={policyContainerRef} />
        </BodyContainer>
      )}
    </Page>
  );
}
