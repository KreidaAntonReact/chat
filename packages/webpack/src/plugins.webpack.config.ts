import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type Configuration, ProgressPlugin } from 'webpack';

import type { TOptionsBuild } from './lib';


export const pluginsWebpackConfig = ({ mode, paths }: TOptionsBuild): Configuration['plugins'] => {
  const isDev = mode === 'development';

  const plugins: Configuration['plugins'] = [
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
    new EslintWebpackPlugin({
      configType: 'eslintrc',
      fix: true,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    })
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  } else {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }));
  }

  return plugins;
};
