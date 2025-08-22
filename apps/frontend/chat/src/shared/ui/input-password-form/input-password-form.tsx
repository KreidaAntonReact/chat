import { Controller } from 'react-hook-form';

import { InputPassword } from '../input-password';

import type { ComponentProps } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';


type TPropsOmit = 'error' | 'onChange' | 'onBlur';

interface IInputPasswordForm <T extends FieldValues> extends Omit<ComponentProps<typeof InputPassword>, TPropsOmit> {
    control: Control<T>
    name: Path<T>
}

export const InputPasswordForm = <T extends FieldValues> ({ control, name, ...props }: IInputPasswordForm<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <InputPassword
        {...props}
        {...field}
        error={error?.message}
      />
    )}
  />
);
