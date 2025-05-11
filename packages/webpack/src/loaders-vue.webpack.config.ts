import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { TOptionsBuild, TRule } from './lib';
import type { ModuleOptions } from 'webpack';


export const loadersVueWebpackConfig = ({ mode }: TOptionsBuild): ModuleOptions['rules'] => {
  const isDev = mode === 'development';

  const assetResource: TRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name][ext]',
    }
  };

  const vueLoader: TRule = {
    test: /\.vue$/i,
    loader: 'vue-loader',
    options: {
      hotReload: isDev ? true : false
    }
  };

  const styleLoader: TRule = {
    test: /\.css$/i,
    use: [
      isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      'postcss-loader',
    ],
  };

  const svgLoader: TRule = {
    test: /\.svg$/i,
    use: [
      'vue-loader',
      'vue-svg-loader',
    ]
  }

  const tsLoader: TRule =  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/]
    },
    exclude: /node_modules/,
  };

  return [
    assetResource,
    vueLoader,
    tsLoader,
    svgLoader,
    styleLoader,
  ];
};
