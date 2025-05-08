import path from 'path';

import { type TConfigWebpack, buildWebpackConfig } from '@packages/webpack';


export default (): TConfigWebpack => {
  const config = buildWebpackConfig({
    mode: 'development',
    port: 3000,
    paths: {
      output: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  });

  return config;
};

