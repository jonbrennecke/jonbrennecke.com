import React from 'react';
import { Page } from '../../src/components';

const IUBENDA_PRIVACY_POLICY_URL =
  'https://www.iubenda.com/api/privacy-policy/70209080/no-markup';

export default function CollageCreatorPrivacyPolicyPage({
  privacyPolicyHTML,
}: {
  privacyPolicyHTML: string;
}) {
  return (
    <Page contentStyle="dark" showLoadingBanner={false}>
      {() => (
        <div className="max-w-screen-lg px-8 lg:px-0">
          <article
            className="prose mx-auto mt-32"
            dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }}
          />
        </div>
      )}
    </Page>
  );
}

async function fetchPrivacyPolicy(): Promise<string> {
  const result = await fetch(IUBENDA_PRIVACY_POLICY_URL);
  if (result.status !== 200) {
    throw new Error(
      `Failed to fetch privacy policy from ${IUBENDA_PRIVACY_POLICY_URL}`
    );
  }
  const { content } = await result.json();
  return content;
}

CollageCreatorPrivacyPolicyPage.getInitialProps = async () => {
  const privacyPolicyHTML = await fetchPrivacyPolicy();
  return {
    privacyPolicyHTML,
  };
};
