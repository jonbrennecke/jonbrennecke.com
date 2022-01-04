import React from 'react';
import Promise from 'bluebird';
import { render } from 'react-dom';
import { App } from './app';

import './index.scss';

Promise.config({
  cancellation: true,
  warnings: {
    wForgottenReturn: false,
  },
});

const element = document.getElementById('react-main');
if (!element) {
  // tslint:disable-next-line:no-console
  console.error('Failed to find `#react-main` component.');
} else {
  render(<App />, element);
}
