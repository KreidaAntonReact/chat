import { devServerWebpackConfig } from './dev-server.webpack.config';
import { loadersReactWebpackConfig } from './loaders-react.webpack.config';
import { loadersVueWebpackConfig } from './loaders-vue.webpack.config';
import { pluginsWebpackConfig } from './plugins.webpack.config';
import { resolveWebpackConfig } from './resolve.webpack.config';

import type { TConfigWebpack, TOptionsBuild } from './lib';


export const buildWebpackConfig = (options: TOptionsBuild): TConfigWebpack => {
  const { mode, paths, framework } = options;
  const isDev = mode === 'development';
  const isReact = framework === 'react';

  return {
    mode: isDev ? 'development' : 'production',
    entry: paths.entry,
    plugins: pluginsWebpackConfig(options),
    module: {
      rules: isReact ? loadersReactWebpackConfig(options) : loadersVueWebpackConfig(options),
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
