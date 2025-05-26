import { cn } from '@packages/utils';

import type { FC , ChangeEvent } from 'react';

interface IRadioProps {
    name: string;
    value: string;
    label: string;
    isChecked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string
}


export const Radio: FC<IRadioProps> = ({
  name,
  value,
  label,
  isChecked = false,
  onChange,
  className
}) => (
  <label
    htmlFor={name}
    className={cn(`list:cursor-pointer list:text-sm
        list:text-white/80 list:rounded-2xl
        list:p-2 list:flex list:items-center
        list:justify-center list:overflow-hidden
        list:hover:bg-brown/80 list:transition-colors
    `, {
      ['list:!bg-brown']: isChecked
    }, className)}>
    <input
      type="radio"
      id={name}
      name={name}
      value={value}
      className='list:hidden'
      onChange={onChange}
      checked={isChecked}
    />
    {label}
  </label>
);
