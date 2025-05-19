import type { EventBas } from '@/event-bas';

declare global {
    interface Window {
        EventBas: InstanceType<typeof EventBas>;
    }
}

export {};
