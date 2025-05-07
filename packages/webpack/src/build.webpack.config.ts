import type { TConfigWebpack, TOptionsBuild } from './lib';


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
    devtool: isDev && 'inline-source-map',
    watchOptions: {
      ignored: ['node_modules'],
    }
  };
};
