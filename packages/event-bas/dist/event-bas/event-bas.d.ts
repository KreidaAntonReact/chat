import type { IEventBas } from '../lib';
import type { TEventMap } from '@packages/types';
export declare class EventBas implements IEventBas {
    private readonly events;
    static instance: EventBas;
    constructor(events?: {
        [K in keyof TEventMap]: Array<(data: TEventMap[K]) => void>;
    });
    on<K extends keyof TEventMap>(event: K, callback: (data: TEventMap[K]) => void): void;
    emit<K extends keyof TEventMap>(event: K, data: TEventMap[K]): void;
    static getInstance(): EventBas;
}
