import { ref, onMounted } from 'vue';

export const useLocalStorage = <T> (key: string, initialValue: T) => {
  const getLocalStorageValue = (): T => {
    try {
      const item = window.localStorage.getItem(key) as string;
      return item ? JSON.parse(item) as T : initialValue;
    } catch {
      return initialValue;
    }
  };

  const storageValue = ref<T>(getLocalStorageValue());

  onMounted(() => storageValue.value = getLocalStorageValue());


  return {
    storageValue,
    setStorageValue: (value: T) => {
      storageValue.value = value;
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };
};
