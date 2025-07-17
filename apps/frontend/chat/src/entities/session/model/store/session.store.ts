import { isAxiosError } from 'axios';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { getCheckSession } from '@/entities/session/api';

import type { IAxiosErrorData } from '@/shared/lib';
import type { StateCreator } from 'zustand';


interface ISessionState {
    isSession: boolean;
    isLoading: boolean;
}

interface ISessionAction {
    fetchCheckSession: () => Promise<boolean>;
}

type TSessionStore = ISessionState & ISessionAction;

const middlewaresSessionStore = (store: StateCreator<TSessionStore>) => devtools(immer(persist( store, { name: 'session' })));

export const useSessionStore = create<TSessionStore>()(middlewaresSessionStore((set, get) => ({
  isSession: false,
  isLoading: false,
  fetchCheckSession: async () => {
    try {
      set({ isLoading: true });

      const response = await getCheckSession();

      set({ isSession: response });
      return get().isSession;
    } catch (error) {
      if(isAxiosError<IAxiosErrorData>(error) && error.response?.status === 401) {
        set({ isSession: false });
        return get().isSession;
      }

      set({ isSession: false });
      throw new Error('Something went wrong!!!');
    } finally {
      set({ isLoading: false });
    }
  },
})));

export type TSessionStoreState = ReturnType<typeof useSessionStore.getState>;
