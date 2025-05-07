import type { TOptionsBuild } from './lib';
import type { ResolveOptions } from 'webpack';


export const resolveWebpackConfig = ({ alias }: TOptionsBuild): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
  alias,
});
