import "dotenv/config";
import path from 'path';

import { type TConfigWebpack, buildWebpackConfig } from '@packages/webpack';

export default (): TConfigWebpack => {
  const config = buildWebpackConfig({
    mode: process.env.NODE_ENV as "development" | "production" || "development",
    port: Number(process.env.PORT) || 3000,
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
  });

  return config;
};

