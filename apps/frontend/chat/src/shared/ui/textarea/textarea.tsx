import { cn } from '@packages/utils';

import type { FC, ReactNode, TextareaHTMLAttributes } from 'react';

interface ITextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix' | 'suffix'> {
    classNameRoot?: string
    className?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
}


export const Textarea: FC<ITextareaProps> = ({
  classNameRoot, className, prefix, suffix, ...props
}) => (
  <div
    className={cn(`chat:bg-dark chat:dark:bg-black chat:rounded-xl chat:w-full
        chat:min-h-12 chat:h-fit chat:py-2 chat:flex chat:px-3 chat:items-center`, classNameRoot)}>
    <div className={cn('chat:hidden', {
      ['chat:block']: !!prefix
    })}>
      {prefix}
    </div>
    <textarea
      className={cn(`chat:w-full chat:h-full chat:border-none chat:py-2 chat:resize-none chat:flex-[1_1_auto]
         chat:px-3 chat:text-sm chat:outline-none chat:overflow-hidden chat:field-sizing-content chat:text-white/80`,
      className)}
      {...props}
    />
    <div className={cn('chat:hidden', {
      ['chat:block']: !!suffix
    })}>
      {suffix}
    </div>
  </div>
);
