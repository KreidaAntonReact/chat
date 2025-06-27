import type { TSessionStoreState } from '@/entities/session/model/store/session.store';

export const getSessionStoreSelector = (state: TSessionStoreState): TSessionStoreState => state;
