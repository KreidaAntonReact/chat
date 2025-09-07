import { cn } from '@packages/utils';
import {
  type FC,
  type ChangeEvent,
  useState,
  useCallback,
  memo,
} from 'react';

import { Radio } from '../radio';

type TOption = {
    id: number;
    value: string;
    label: string;
}

interface IFiltersProps {
    options: TOption[];
    onChange?: (value: TOption['value']) => void;
    defaultValue?: TOption['value'];
    className?: string
}

const MemoRadio = memo(Radio);

export const Filters: FC<IFiltersProps> = ({
  options,
  onChange,
  defaultValue = null,
  className
}) => {
  const [optionFilter, setOptionFilter] = useState<TOption['value'] | null>(defaultValue);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setOptionFilter(value);
    onChange?.(value);
  }, [onChange]);

  return (
    <div
      className={cn(`chat:flex chat:items-center
        chat:justify-around chat:gap-5
        chat:bg-brown/30 chat:rounded-2xl
        chat:px-2 chat:py-1 chat:w-full
        chat:dark:bg-dark`, className)}
    >
      {options.map((option) => (
        <MemoRadio
          key={option.id}
          name={option.value}
          label={option.label}
          value={option.value}
          isChecked={optionFilter === option.value}
          onChange={handleOnChange}
          className="chat:grow chat:basis-0"
        />
      ))}
    </div>
  );
};

