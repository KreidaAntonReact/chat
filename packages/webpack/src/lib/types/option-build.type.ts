import type { TMode } from './mode.type';
import type { ResolveOptions } from 'webpack';

export type TOptionsBuild = {
    framework: 'react' | 'vue'
    mode: TMode;
    port: number;
    paths: {
        entry: string;
        output: string;
        html: string;
        tsconfig: string;
        env: string;
        eslintconfig?: string;
    }
    alias: ResolveOptions['alias'];
}
