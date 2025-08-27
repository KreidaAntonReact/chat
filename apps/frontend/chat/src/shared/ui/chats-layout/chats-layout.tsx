import type { FC, ReactNode } from 'react';

interface IChatLayoutProps {
  chatListSlot?: ReactNode;
  children?: ReactNode;
}

export const ChatsLayout: FC<IChatLayoutProps> = ({ chatListSlot, children }) => (
  <div className='chat:relative chat:w-full chat:h-full chat:flex chat:flex-[1_1_0]'>
    <div
      className="chat:bg-dark chat:max-w-[320px] chat:w-full chat:dark:bg-black
      chat:text-2xl chat:dark:text-white
      chat:h-screen chat:rounded-t-[0px]
      chat:overflow-hidden"
    >
      {chatListSlot}
    </div>
    <div
      className='chat:relative chat:left-0
        chat:top-0 chat:overflow-hidden
        chat:w-full chat:h-full'
    >
      {children}
    </div>
  </div>
);
