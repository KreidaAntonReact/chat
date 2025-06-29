import 'dotenv/config';
import path from 'path';

import { type TConfigWebpack, buildWebpackConfig } from '@packages/webpack';
import { container } from 'webpack';

import packageJson from './package.json';


export default (): TConfigWebpack => {
  const config = buildWebpackConfig({
    mode: process.env.NODE_ENV as 'development' | 'production' ?? 'development',
    port: Number(process.env.PORT) ?? 3000,
    paths: {
      output: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      eslintconfig: path.resolve(__dirname, '.eslintrc.js'),
      env: path.resolve(__dirname, '.env'),
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    framework: 'react'
  });

  const SIDEBAR_URL = 'http://localhost:3001';

  config.plugins?.push(new container.ModuleFederationPlugin({
    name: 'chat',
    filename: 'remoteEntry.js',
    exposes: {
      './routers': './src/app/routers/router.tsx',
      './styles': './src/app/styles/main.css'
    },
    remotes: {
      'sidebar': `sidebar@${SIDEBAR_URL}/remoteEntry.js`,
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
      },
      zod: {
        singleton: true,
        eager: true,
        version: packageJson.dependencies.zod,
      },
      'react-router': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.dependencies['react-router']
      },
      'react-dom': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.dependencies['react-dom']
      },
      'tailwindcss': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.devDependencies['tailwindcss'],
      },
      'autoprefixer': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.devDependencies['autoprefixer'],
      },
      'postcss': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.devDependencies['postcss'],
      },
    }
  }));

  return config;
};

