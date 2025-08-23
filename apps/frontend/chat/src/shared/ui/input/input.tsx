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
  error?: string;
  classNameWrapper?: string
}

export const Input: FC<InputProps> = ({
  prefix,
  suffix,
  error,
  className,
  classNameWrapper,
  disabled,
  ...props
}) => {
  const refInput = useRef<HTMLInputElement | null>(null);

  return (
    <div className={cn('chat:flex chat:flex-col chat:gap-2', classNameWrapper)}>
      <div
        className={cn(`chat:w-full chat:h-9 chat:flex
        chat:items-center chat:bg-brown/30 chat:relative chat:z-10
       chat:dark:bg-dark chat:rounded-sm chat:transition-colors
        chat:p-1 chat:px-2 chat:has-[input:focus]:outline-2
        chat:has-[input:focus]:outline-blue-300 chat:hover:outline-2
        chat:hover:outline-blue-200`, {
          ['chat:!outline-red-500 chat:outline-2']: !!error,
          ['chat:!bg-gray-400/30 chat:cursor-not-allowed chat:!outline-0']: disabled
        })}
      >
        <div
          className={cn('chat:hidden',{
            ['chat:block']: !!prefix
          })}
        >
          {prefix}
        </div>
        <input
          className={cn(`chat:h-full chat:px-2 chat:text-white/80 chat:dark:text-white chat:border-none
      chat:w-full h-full chat:text-sm chat:outline-none chat:bg-transparent chat:dark:bg-transparent`, className, {
          ['chat:cursor-not-allowed']: disabled,
      })}
          {...props}
          disabled={disabled}
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
      {error && (
        <span
          className={`chat:text-red-600
          chat:text-sm chat:animate-show
          chat:transform-[translateY(-50%)]
          chat:relative chat:z-0 chat:opacity-0
          `}
        >
          {error}
        </span>
      )
      }
    </div>
  );
};
