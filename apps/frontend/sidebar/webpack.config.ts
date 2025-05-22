import 'dotenv/config';
import path from 'path';

import {  type TConfigWebpack, buildWebpackConfig } from '@packages/webpack';
import { container } from 'webpack';

import packageJson from './package.json';


export default (): TConfigWebpack => {
  const config = buildWebpackConfig({
    mode: process.env.NODE_ENV as 'development' | 'production' ?? 'development',
    port: Number(process.env.PORT) ?? 3000,
    paths: {
      output: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      env: path.resolve(__dirname, '.env'),
      eslintconfig: path.resolve(__dirname, '.eslintrc.ts')
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
    framework: 'vue'
  });

  config.plugins?.push(new container.ModuleFederationPlugin({
    name: 'sidebar',
    filename: 'remoteEntry.js',
    exposes: {
      './sidebar': './src/widgets/sidebar/ui/sidebar-async-wrapper.vue',
      './vue': 'vue',
      './styles': './src/app/styles/main.css'
    },
    shared: {
      ...packageJson.dependencies,
      vue: {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.dependencies.vue,
      },
      '@vue/compiler-sfc': {
        eager: true,
        singleton: true,
        requiredVersion: packageJson.dependencies['@vue/compiler-sfc'],
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

