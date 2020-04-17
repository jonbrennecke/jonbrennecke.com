import fetch from 'isomorphic-fetch';
import { RecordOfContactFormState } from './contactFormState';

const cloudFunctionBaseURL =
  'https://us-central1-high-street-6a792.cloudfunctions.net';

export const submitContactFormResponse = async (
  contactForm: RecordOfContactFormState
) => {
  const response = await fetch(
    `${cloudFunctionBaseURL}/createContactFormRecord`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactForm.toJS()),
    }
  );
  await response.json();
};
