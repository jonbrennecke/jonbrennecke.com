/* eslint-disable */
'use strict';

const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const packageData = require('../package.json');

const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';
const isDev = !isProduction || !isStaging;

const env = !process.env.NETLIFY
  ? new DotenvPlugin({
      sample: path.resolve(__dirname, '..', '..', '..', '.env.example'),
      path: path.resolve(__dirname, '..', '..', '..', '.env'),
      allowEmptyValues: true,
    })
  : null;

const progressPlugin = new webpack.ProgressPlugin(
  (percentage, message, ...args) => {
    console.info(percentage, message, ...args);
  }
);

const uglifyPlugin =
  (isProduction || isStaging) &&
  new UglifyJSPlugin({
    sourceMap: true,
  });

const hotModulesPlugin = isDev && new webpack.HotModuleReplacementPlugin();

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  'process.env.VERSION': JSON.stringify(packageData.version),
  PROJECT_ROOT: path.join('"', __dirname, '"'),
});

const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.join(__dirname, 'template.html'),
  chunks: ['index', 'vendor', 'hotLoader', 'common'],
  excludeChunks: [],
  chunksSortMode: 'dependency',
});

const extractCssPlugin = new MiniCssExtractPlugin({
  filename: '[name]_[contenthash].css',
  chunkFilename: '[id]_[contenthash].css',
});

const cleanPlugin =
  (isProduction || isStaging) && new CleanWebpackPlugin(['public']);

const copySEOAssetsPlugin = new CopyPlugin([
  { from: path.resolve(__dirname, '..', 'assets', 'seo') },
]);

const clientPlugins = _.compact([
  cleanPlugin,
  extractCssPlugin,
  htmlPlugin,
  definePlugin,
  env,
  hotModulesPlugin,
  progressPlugin,
  copySEOAssetsPlugin,
]);

const serverPlugins = _.compact([
  cleanPlugin,
  extractCssPlugin,
  definePlugin,
  env,
]);

const optimization = {
  minimizer: _.compact([uglifyPlugin]),
};

const webpackMode = isProduction || isStaging ? 'production' : 'development';

const aliases = {
  '~': path.resolve(__dirname, '..', 'src'),
  assets: path.resolve(__dirname, 'assets'),
};

const resolve = {
  modules: ['node_modules', path.resolve(__dirname, '..', './node_modules')],
  extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx'],
  alias: aliases,
};

const publicPath = isProduction || isStaging ? '/' : '/public/';

const output = {
  publicPath,
  path: path.resolve('public'),
  filename: '[name].js', // TODO add contenthash
};

const clientRules = [
  {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    use: ['react-hot-loader/webpack', 'babel-loader'],
  },
  {
    test: /\.html$/,
    use: 'html-loader',
  },
  {
    test: /\.(jpg|png|ico|xml)$/,
    use: {
      loader: 'file-loader?name=[name].[ext]',
    },
  },
  {
    test: /\.(eot|ttf|woff|woff2|otf)$/,
    use: {
      loader: 'file-loader?name=[name].[ext]',
    },
  },
  {
    test: /google.*\.html$/,
    use: {
      loader: 'file-loader?name=[name].[ext]',
    },
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isDev
        ? 'style-loader'
        : {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath },
          },
      {
        loader: 'css-loader',
        options: {
          url: true,
        },
      },
      'resolve-url-loader',
      'sass-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /(\.svg)$/,
    use: {
      loader: 'svg-inline-loader',
    },
  },
];

const serverRules = clientRules;

const client = {
  devServer: {
    noInfo: true,
  },
  mode: webpackMode,
  target: 'web',
  entry: _.extend(
    {
      index: ['react-hot-loader/patch', path.resolve('src', 'index.tsx')],
      vendor: ['react', 'react-dom'],
    },
    isDev && {
      hotLoader: 'webpack-hot-middleware/client',
    }
  ),
  context: __dirname,
  devtool: 'source-map',
  node: {
    __filename: true,
    __dirname: true,
    fs: 'empty',
  },
  output,
  resolve,
  module: {
    rules: clientRules,
  },
  plugins: clientPlugins,
  optimization,
};

const server = {
  devServer: {
    noInfo: true,
  },
  mode: webpackMode,
  target: 'node',
  entry: {
    server: path.resolve('src', 'server.tsx'),
  },
  externals: nodeExternals(),
  context: __dirname,
  devtool: 'source-map',
  output,
  resolve,
  module: {
    rules: serverRules,
  },
  plugins: serverPlugins,
  optimization,
};

module.exports = client;
