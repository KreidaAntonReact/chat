import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

import type { TOptionsBuild, TRule } from './lib';
import type { ModuleOptions } from 'webpack';


export const loadersWebpackConfig = ({ mode }: TOptionsBuild): ModuleOptions['rules'] => {
  const isDev = mode === 'development';

  const assetResource: TRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name][ext]',
    }
  };

  const svgLoader: TRule = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    ],
  };

  const styleLoaders: TRule[] = [
    {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          }
        },
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.css$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ],
    },
  ];


  const tsLoader: TRule =  {
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev
        },
      }
    ],
    exclude: /node_modules/,
  };

  return [
    assetResource,
    ...styleLoaders,
    tsLoader,
    svgLoader,
  ];
};
