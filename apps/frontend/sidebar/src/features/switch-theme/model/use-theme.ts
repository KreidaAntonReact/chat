import { useThemeStore } from '@packages/shared-store';
import { onMounted, watch, ref } from 'vue';

import type { TTheme } from '@packages/types';

const { getInitialState } = useThemeStore;


const updateAttrDocument = (value: TTheme) => {
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(value);
};


export const useTheme = () => {
  const { initTheme, setTheme } = getInitialState();
  const theme = ref(initTheme());

  onMounted(() => {
    updateAttrDocument(theme.value);
  });


  watch(theme, () => {
    updateAttrDocument(theme.value);
  });

  const handleChangeTheme = (enabled: boolean) => {
    setTheme(enabled ? 'dark' : 'light');
    theme.value = enabled ? 'dark' : 'light';
  };

  return {
    handleChangeTheme,
    theme: theme.value,
  };
};
