import { devServerWebpackConfig } from './dev-server.webpack.config';
import { loadersWebpackConfig } from './loaders.webpack.config';
import { pluginsWebpackConfig } from './plugins.webpack.config';
import { resolveWebpackConfig } from './resolve.webpack.config';

import type { TConfigWebpack, TOptionsBuild } from '@/lib';


export const buildWebpackConfig = (options: TOptionsBuild): TConfigWebpack => {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    entry: paths.entry,
    output: {
      path: paths.output,
      clean: true,
    },
    resolve: resolveWebpackConfig(options),
    plugins: pluginsWebpackConfig(options),
    loader: loadersWebpackConfig(options),
    devServer: devServerWebpackConfig(options),
    devtool: isDev && 'inline-source-map',
    watchOptions: {
      ignored: ['node_modules'],
    }
  };
};
