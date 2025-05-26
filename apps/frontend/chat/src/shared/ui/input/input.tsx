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
    <div className={cn('chat:w-full chat:h-9 chat:relative chat:flex chat:items-center')}>
      <div
        className={cn('chat:hidden chat:cursor-pointer',{
          ['chat:block chat:absolute chat:top-1/2 chat:left-3 chat:-translate-y-1/2']: !!prefix
        })}
        onClick={onClickFocus}
      >
        {prefix}
      </div>
      <input
        className={cn(`chat:bg-brown/80 chat:dark:bg-brown chat:h-full chat:px-2 chat:text-white/80
      chat:w-full h-full chat:rounded-2xl chat:text-sm`, {
          ['chat:pl-10']: !!prefix
        })}
        ref={inputRef}
        {...props}
      />
    </div>
  );
};
