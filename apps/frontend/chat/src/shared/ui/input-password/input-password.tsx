import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { cn } from '@packages/utils';
import {
  useRef,
  useState,
  type FC,
  type InputHTMLAttributes,
  type ReactNode
} from 'react';

interface IInputPasswordProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'prefix'>  {
    prefix?: ReactNode
    error?: string
}

export const InputPassword: FC<IInputPasswordProps> = ({ prefix, error, ...props }) => {
  const refInput = useRef<HTMLInputElement | null>(null);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);

  return (
    <div className='chat:flex chat:flex-col chat:gap-2'>
      <div
        className={cn(`chat:w-full chat:h-9 chat:flex
            chat:items-center chat:bg-brown/30
           chat:dark:bg-dark chat:rounded-sm chat:transition-colors
            chat:p-1 chat:px-2 chat:has-[input:focus]:outline-2
            chat:has-[input:focus]:outline-blue-300 chat:hover:outline-2
            chat:hover:outline-blue-200`, {
          ['chat:!outline-red-500']: !!error
        })}
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
          className={cn(`chat:h-full chat:px-2 chat:text-white/80 chat:dark:text-white chat:border-none
          chat:w-full h-full chat:text-sm chat:outline-none chat:bg-transparent
          chat:dark:bg-transparent chat:relative chat:z-10`)}
          ref={refInput}
          type={isShowPassword ? 'password' : 'text'}
          {...props}
        />
        <button
          className='chat:p-0 chat:border-0 chat:bg-none chat:cursor-pointer'
          onClick={() => setIsShowPassword(!isShowPassword)}
          type='button'
        >
          {isShowPassword
            ? (
              <EyeIcon className='chat:w-6 chat:h-6 chat:text-white/80 chat:dark:text-white'/>
            )
            : (
              <EyeSlashIcon className='chat:w-6 chat:h-6 chat:text-white/80 chat:dark:text-white'/>
            )}
        </button>
      </div>

      {error && (
        <span
          className='chat:text-red-600 chat:text-sm chat:relative chat:z-0
          chat:animate-show chat:transform-[translateY(-50%)]'
        >
          {error}
        </span>
      )}
    </div>
  );
};
