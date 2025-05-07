import type { TMode } from './mode.type';

export type TOptionsBuild = {
    mode: TMode;
    port: number;
    paths: {
        entry: string;
        output: string;
    }
}
