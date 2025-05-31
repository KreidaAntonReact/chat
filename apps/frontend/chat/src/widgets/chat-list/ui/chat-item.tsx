import { Avatar } from '@/shared';

import type { FC } from 'react';


interface IChatItemProps {
    onClick?: () => void
    avatarSrc?: string
}


export const ChatItem: FC<IChatItemProps> = ({ onClick, avatarSrc }) => (
  <div
    className="chat:w-full chat:h-18
    chat:bg-darksLateGray chat:rounded-lg
    chat:px-3 chat:py-2 chat:cursor-pointer
    chat:flex chat:items-center chat:justify-between"
    onClick={onClick}
  >
    <div className='chat:flex chat:items-center chat:gap-2'>
      <Avatar imageSrc={avatarSrc} />
      <div className='chat:flex chat:flex-col chat:gap-1.5'>
        <div className='chat:text-white/80 chat:text-sm'>Name</div>
        <div className='chat:text-white/80 chat:text-sm'>Last message</div>
      </div>
    </div>

    <div className='chat:w-5 chat:h-5 chat:bg-green-400 chat:rounded-full chat:text-center'>
      <div className='chat:text-sm chat:text-white/80'>1</div>
    </div>
  </div>
);
