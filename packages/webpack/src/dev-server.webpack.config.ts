import type { TOptionsBuild } from './lib';
import type { Configuration } from 'webpack-dev-server';


export const devServerWebpackConfig = ({ port, mode }: TOptionsBuild): Configuration | undefined => {
  const isDev = mode === 'development';

  return isDev
    ? {
      port: port,
      open: true,
      historyApiFallback: true,
      hot: true,
      compress: true,
      watchFiles: ['src/**/*']
    }
    : undefined;
};
