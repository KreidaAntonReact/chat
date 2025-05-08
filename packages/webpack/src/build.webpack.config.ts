import { devServerWebpackConfig } from './dev-server.webpack.config';
import { loadersWebpackConfig } from './loaders.webpack.config';
import { pluginsWebpackConfig } from './plugins.webpack.config';
import { resolveWebpackConfig } from './resolve.webpack.config';

import type { TConfigWebpack, TOptionsBuild } from './lib';


export const buildWebpackConfig = (options: TOptionsBuild): TConfigWebpack => {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    entry: paths.entry,
    plugins: pluginsWebpackConfig(options),
    module: {
      rules: loadersWebpackConfig(options),
    },
    resolve: resolveWebpackConfig(options),
    output: {
      path: paths.output,
      clean: true,
    },
    devtool: isDev && 'inline-source-map',
    devServer: devServerWebpackConfig(options),
    watchOptions: {
      ignored: ['node_modules'],
    }
  };
};
