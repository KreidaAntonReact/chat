import { cn } from '@packages/utils';

import type { FC, ReactNode, TextareaHTMLAttributes } from 'react';

interface ITextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix' | 'suffix'> {
    classNameRoot?: string
    className?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    mHeight?: number
}


export const Textarea: FC<ITextareaProps> = ({
  classNameRoot,
  className,
  prefix,
  suffix,
  mHeight = 300,
  ...props
}) => (
  <div
    className={cn(`chat:bg-dark chat:dark:bg-black chat:rounded-xl chat:w-full
        chat:min-h-12 chat:py-2 chat:flex chat:px-3 chat:items-center chat:justify-start`, classNameRoot)}>
    <div className='chat:flex chat:overflow-hidden chat:justify-between chat:items-end chat:h-fit chat:w-full'>
      <div className={cn('chat:hidden', {
        ['chat:flex chat:items-center chat:justify-center']: !!prefix
      })}>
        {prefix}
      </div>
      <div className={cn(`chat:flex-[1_1_auto] chat:h-fit chat:p-3 chat:w-full
        chat:flex chat:items-center chat:overflow-y-auto`)}
      style={{ maxHeight: mHeight }}>
        <textarea
          className={cn(`chat:w-full chat:h-full chat:border-none chat:resize-none
        chat:text-sm chat:outline-none chat:overflow-hidden chat:field-sizing-content chat:text-white/80`,
          className)}
          {...props}
        />
      </div>
      <div className={cn('chat:hidden', {
        ['chat:flex chat:items-center chat:justify-center']: !!suffix
      })}>
        {suffix}
      </div>
    </div>
  </div>
);
