import type { FC, ReactNode } from 'react';

interface IChatLayoutProps {
    headerSlot?: ReactNode
    children?: ReactNode
    footerSlot?: ReactNode
}


export const ChatLayout: FC<IChatLayoutProps> = ({ headerSlot, children, footerSlot }) => (
  <div className="chat:w-full chat:h-full chat:flex chat:flex-col chat:relative chat:left-0 chat:top-0">
    <div className="chat:w-full chat:h-20 chat:bg-dark
    chat:dark:bg-black chat:flex chat:items-center
    chat:px-3 chat:py-[20px]"
    >
      {headerSlot}
    </div>
    <div className="chat:flex-[1_1_0] chat:w-full chat:h-full
        chat:overflow-y-auto chat:px-3 chat:flex chat:flex-col
        chat:items-center chat:justify-start"
    >
      <div className="chat:w-full chat:max-w-[796px] chat:py-5">
        {children}
      </div>
    </div>
    <div className="chat:w-full chat:flex
        chat:items-center chat:justify-center"
    >
      {footerSlot}
    </div>
  </div>
);
