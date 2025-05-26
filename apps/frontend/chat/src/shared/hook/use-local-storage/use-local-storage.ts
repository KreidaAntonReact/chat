import { useState, useEffect } from 'react';

interface IUseLocalStorage<T> {
    key: string;
    initialValue: T
}

export const useLocalStorage = <T> ({ key, initialValue }: IUseLocalStorage<T>) => {
  const initValue = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) as T : initialValue;
    } catch {
      return initialValue;
    }
  };


  const [valueStorage, setValueStorage] = useState<T>(initValue());


  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(valueStorage));
  }, [valueStorage, key]);

  return {
    valueStorage,
    setValueStorage
  };
};
