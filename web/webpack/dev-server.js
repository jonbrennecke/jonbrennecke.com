'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const dotenv = require('dotenv');

const log = require('./log');
const webpackConfig = require('./webpack.config');

const clientWebpackConfig = webpackConfig;

dotenv.config();

const app = express();
const compiler = webpack(clientWebpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: clientWebpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  })
);

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const port = process.env.FIDO_WEB_PORT || 3000;

app.listen(port, err => {
  if (err) {
    log.trace(err);
    log.error('Failed to start Development Server.');
    return;
  }
  log.info('Listening at http://localhost:' + port);
});
