import { type ChangeEvent, useCallback } from 'react';

import { useLocalStorage } from '@/shared/hooks';

import type { ListOptionsFilters } from '@/features/change-filter-chats/lib';


type TOptionsValue = typeof ListOptionsFilters[number]['value'];


interface IUseChangeFiltersArgs<T extends string> {
    defaultValue: T
}

export const useChangeFilters = ({ defaultValue }: IUseChangeFiltersArgs<TOptionsValue>) => {
  const { setValueStorage, valueStorage } = useLocalStorage({
    key: 'change-filters',
    initialValue: defaultValue
  });

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as TOptionsValue;
    window.EventBas.emit('change-filter-chats', { filter: value });
    setValueStorage(value);
  }, [setValueStorage]);


  return [
    valueStorage,
    handleOnChange
  ] as const;
};
