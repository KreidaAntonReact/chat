import { createContext, type FC, type ReactNode } from 'react';

import { useLocalStorage } from '@/shared/hooks/use-local-storage';


type TTheme = 'dark' | 'light';

interface IThemeContextProvider {
    theme: TTheme;
};

const ThemeContextProvider = createContext<IThemeContextProvider>({
  theme: 'dark',
});

interface IThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContext: FC <IThemeContextProviderProps> = ({ children }) => {
  const { valueStorage } = useLocalStorage<TTheme>({ key: 'theme', initialValue: 'dark' });

  return (
    <ThemeContextProvider.Provider value={{ theme: valueStorage }}>
      {children}
    </ThemeContextProvider.Provider>
  );
};
