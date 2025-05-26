import { cn } from '@packages/utils';
import {
  useRef,
  type FC,
  type ComponentProps,
  type ReactNode
} from 'react';


interface InputProps extends Omit<ComponentProps<'input'>, 'prefix'> {
  prefix?: ReactNode
}

export const Input: FC<InputProps> = ({ prefix, ...props }) => {
  const inputRef = useRef<HTMLInputElement| null>(null);

  const onClickFocus = () => inputRef.current?.focus();

  return (
    <div className={cn('list:w-full list:h-9 list:relative list:flex list:items-center')}>
      <div
        className={cn('list:hidden list:cursor-pointer',{
          ['list:block list:absolute list:top-1/2 list:left-3 list:-translate-y-1/2']: !!prefix
        })}
        onClick={onClickFocus}
      >
        {prefix}
      </div>
      <input
        className={cn(`list:bg-brown/80 list:dark:bg-brown list:h-full list:px-2 list:text-white/80
      list:w-full h-full list:rounded-2xl list:text-sm`, {
          ['list:pl-10']: !!prefix
        })}
        ref={inputRef}
        {...props}
      />
    </div>
  );
};
