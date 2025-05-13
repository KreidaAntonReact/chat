import { onMounted, watch } from 'vue';

import { useLocalStorage } from '@/shared';

type TTheme = 'dark' | 'light';

const updateAttrDocument = (value: TTheme) => {
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(value);
};


export const useTheme = () => {
  const {storageValue, setStorageValue} = useLocalStorage<TTheme>('theme', 'dark');

  onMounted(() => {
    updateAttrDocument(storageValue.value);
  });


  watch(storageValue, () => {
    updateAttrDocument(storageValue.value);
  });

  const handleChangeTheme = (enabled: boolean,) => {
    setStorageValue(enabled ? 'dark' : 'light');
  };

  return {
    handleChangeTheme
  };
};
