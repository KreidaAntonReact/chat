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
    className={cn(`chat:cursor-pointer chat:text-sm
        chat:text-white/80 chat:rounded-2xl
        chat:p-2 chat:flex chat:items-center
        chat:justify-center chat:overflow-hidden
        chat:hover:bg-brown/80 chat:transition-colors
    `, {
      ['chat:!bg-brown']: isChecked
    }, className)}>
    <input
      type="radio"
      id={name}
      name={name}
      value={value}
      className='chat:hidden'
      onChange={onChange}
      checked={isChecked}
    />
    {label}
  </label>
);
