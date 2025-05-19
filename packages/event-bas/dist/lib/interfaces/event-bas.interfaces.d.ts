import type { TEventMap } from '@packages/types';
export interface IEventBas {
    on<K extends keyof TEventMap>(event: K, callback: (data: TEventMap[K]) => void): void;
    emit<K extends keyof TEventMap>(event: K, data: TEventMap[K]): void;
}
//# sourceMappingURL=event-bas.interfaces.d.ts.map