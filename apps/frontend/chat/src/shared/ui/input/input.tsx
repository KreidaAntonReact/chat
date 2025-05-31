import { cn } from '@packages/utils';
import {
  type FC,
  type ComponentProps,
  type ReactNode,
  useRef
} from 'react';


interface InputProps extends Omit<ComponentProps<'input'>, 'prefix' | 'suffix'> {
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export const Input: FC<InputProps> = ({ prefix, suffix, ...props }) => {
  const refInput = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={cn(`chat:w-full chat:h-9 chat:flex
        chat:items-center chat:bg-brown/80
       chat:dark:bg-brown chat:rounded-2xl chat:transition-colors
        chat:p-1 chat:px-2 chat:has-[input:focus]:outline-2
        chat:has-[input:focus]:outline-blue-300 chat:hover:outline-2 chat:hover:outline-blue-200`)}
      onClick={() => refInput.current?.focus()}
    >
      <div
        className={cn('chat:hidden',{
          ['chat:block']: !!prefix
        })}
      >
        {prefix}
      </div>
      <input
        className={cn(`chat:h-full chat:px-2 chat:text-white/80 chat:border-none
      chat:w-full h-full chat:text-sm chat:outline-none chat:bg-transparent chat:dark:bg-transparent`)}
        {...props}
        ref={refInput}
      />
      <div
        className={cn('chat:hidden',{
          ['chat:block']: !!suffix
        })}
      >
        {suffix}
      </div>
    </div>
  );
};
