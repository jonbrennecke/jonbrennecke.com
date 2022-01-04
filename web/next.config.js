const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@portfolio/components',
]);

module.exports = withPlugins([
  withTM,
]);