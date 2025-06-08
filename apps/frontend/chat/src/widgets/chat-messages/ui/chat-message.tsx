import { cn } from '@packages/utils';

import type { FC } from 'react';

interface IChatMessageProps {
    isMy?: boolean
}


export const ChatMessage: FC<IChatMessageProps> = ({ isMy }) => (
  <div className={cn(`chat:w-full chat:max-w-2/5 chat:min-h-10
    chat:bg-dark chat:dark:bg-darksLateGray
    chat:rounded-lg chat:px-3 chat:py-2 chat:text-white/80
    chat:text-sm chat:dark:text-white`, {
    ['chat:ml-auto']: isMy
  })}/>
);
