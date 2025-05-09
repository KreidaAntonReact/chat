import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { type Configuration, ProgressPlugin } from 'webpack';

import type { TOptionsBuild } from './lib';


export const pluginsWebpackConfig = ({ mode, paths, framework }: TOptionsBuild): Configuration['plugins'] => {
  const isDev = mode === 'development';
  const isReact = framework === 'react';

  const plugins: Configuration['plugins'] = [
    new Dotenv({
      path: paths.env,
      safe: false,
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
      publicPath: '/'
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: paths.tsconfig,
      },
      devServer: isDev,
    }),
  ];

  if(paths?.eslintconfig) {
    plugins.push(new EslintWebpackPlugin({
      configType: 'eslintrc',
      fix: true,
      extensions: ['js','ts','jsx','tsx', 'vue'],
      files: paths.eslintconfig,
    }));
  }

  if(isDev && isReact) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if(!isReact) {
    plugins.push(new VueLoaderPlugin());
  }

  if (isDev) {
    plugins.push(new ProgressPlugin());
  } else {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: 'styles/[name].[contenthash].css'
    }));
  }

  return plugins;
};
