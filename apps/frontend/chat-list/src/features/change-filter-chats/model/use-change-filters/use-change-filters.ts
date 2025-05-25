import { type ChangeEvent, useCallback, useState } from 'react';

import type { ListOptionsFilters } from '@/features/change-filter-chats/lib';


type TOptionsValue = typeof ListOptionsFilters[number]['value'];


interface IUseChangeFiltersArgs<T extends string> {
    defaultValue: T
}

export const useChangeFilters = ({ defaultValue }: IUseChangeFiltersArgs<TOptionsValue>) => {
  const [currentOption, setCurrentOption] = useState(defaultValue);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as TOptionsValue;
    setCurrentOption(value);
  }, []);


  return [
    currentOption,
    handleOnChange
  ] as const;
};
