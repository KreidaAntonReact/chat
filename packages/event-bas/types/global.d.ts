import type { EventBas } from '../src/event-bas/event-bas';

declare global {
    interface Window {
        EventBas: InstanceType<typeof EventBas>;
    }
}

export {};
