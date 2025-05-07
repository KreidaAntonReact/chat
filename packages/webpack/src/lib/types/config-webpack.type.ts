import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export type TConfigWebpack = Configuration & DevServerConfiguration;
