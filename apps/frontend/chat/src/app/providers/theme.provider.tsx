import { useThemeStore } from '@packages/shared-store';
import { useEffect } from 'react';
import { useStore } from 'zustand';


export const ThemeProvider = () => {
  const initTheme = useStore(useThemeStore, (store) => store.initTheme);

  useEffect(() => {
    const theme = initTheme();

    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [initTheme]);


  return null;
};
