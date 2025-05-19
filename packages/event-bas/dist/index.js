import { EventBas } from './event-bas';
if (typeof window !== 'undefined') {
    window.EventBas = EventBas.getInstance();
}
export { EventBas };
