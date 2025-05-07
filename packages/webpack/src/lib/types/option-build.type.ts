import type { TMode } from './mode.type';
import type { ResolveOptions } from 'webpack';


export type TOptionsBuild = {
    mode: TMode;
    port: number;
    paths: {
        entry: string;
        output: string;
        html: string;
        tsconfig: string;
    }
    alias: ResolveOptions['alias'];
}
