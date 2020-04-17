import { RecordOf, Record } from 'immutable';

export interface ContactFormState {
  name: string;
  email: string;
  description: string;
}

export type RecordOfContactFormState = RecordOf<ContactFormState>;

export const ContactFormStateRecord = Record<ContactFormState>({
  name: '',
  email: '',
  description: '',
});

export enum ContactFormActionType {
  setName = 'setName',
  setEmail = 'setEmail',
  setDescription = 'setDescription',
}

export type ContactFormAction =
  | { type: ContactFormActionType.setName; payload: { name: string } }
  | { type: ContactFormActionType.setEmail; payload: { email: string } }
  | {
      type: ContactFormActionType.setDescription;
      payload: { description: string };
    };

export const setName = (name: string): ContactFormAction => ({
  type: ContactFormActionType.setName,
  payload: {
    name,
  },
});

export const setEmail = (email: string): ContactFormAction => ({
  type: ContactFormActionType.setEmail,
  payload: {
    email,
  },
});

export const setDescription = (description: string): ContactFormAction => ({
  type: ContactFormActionType.setDescription,
  payload: {
    description,
  },
});

export const contactFormReducer = (
  state: RecordOfContactFormState,
  action: ContactFormAction
) => {
  switch (action.type) {
    case ContactFormActionType.setName:
      return state.set('name', action.payload.name);
    case ContactFormActionType.setEmail:
      return state.set('email', action.payload.email);
    case ContactFormActionType.setDescription:
      return state.set('description', action.payload.description);
  }
};
