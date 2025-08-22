import { Controller } from 'react-hook-form';

import { Input } from '../input';

import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

type TPropsOmit = 'error' | 'onChange' | 'onBlur';

interface IInputForm <T extends FieldValues> extends Omit<ComponentProps<typeof Input>, TPropsOmit> {
    control: Control<T>
    name: Path<T>
}

export const InputForm =  <T extends FieldValues> ({ control, name, ...props }: IInputForm<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Input
        {...props}
        {...field}
        error={error?.message}
      />
    )}
  />
);
