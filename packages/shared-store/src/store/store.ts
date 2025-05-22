import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

interface IInitialState {
    user: {
        avatar: string;
    },
    setAvatar: (avatar: string) => any,
}

const initialState: IInitialState = {
  user: {
    avatar: ''
  },
  setAvatar: () => null,
};

export const store = createStore<IInitialState,
[
    ['zustand/devtools', never],
    ['zustand/persist', IInitialState]
]
>(
  devtools(
    persist((set) => ({
      ...initialState,
      setAvatar: (avatar: string) => set(() => ({ user: { avatar } }))
    }), {
      name: 'shared-store',
      storage: createJSONStorage(() => localStorage)
    })
  )
);
