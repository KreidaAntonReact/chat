import type { TArrayElement } from '@packages/types';
import type { ModuleOptions } from 'webpack';


export type TRule = TArrayElement<ModuleOptions['rules']>;
