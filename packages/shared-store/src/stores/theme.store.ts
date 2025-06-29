import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { createStore, type StateCreator } from 'zustand/vanilla';

import type { TTheme } from '@packages/types';

type TInitialState  = {
    theme: TTheme | null,
    keyStorageTheme: string
}


type TActionsState = {
  initTheme: () => TTheme,
  setTheme: (theme: TTheme) => void
}

type TStore = TInitialState & TActionsState;

const middlewareThemeStore = (store: StateCreator<TStore>) => devtools(
  persist(store, { name: 'theme-store', storage: createJSONStorage(() => localStorage) })
);

export const useThemeStore = createStore<TStore>()(middlewareThemeStore((set, get) => ({
  theme: null,
  keyStorageTheme: 'theme',
  initTheme: () => {
    const currentValue = get().theme;

    if (currentValue) {
      set({ theme: currentValue });
      return currentValue;
    }


    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    set({ theme: systemTheme });

    return systemTheme;
  },
  setTheme: (theme: TTheme) => {
    set({ theme });
  },
})));
