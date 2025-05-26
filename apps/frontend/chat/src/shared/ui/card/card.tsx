import { UserCircleIcon } from '@heroicons/react/24/outline';

import type { FC } from 'react';

interface ICardProps {
    onClick?: () => void
    avatar?: string
}


export const Card: FC<ICardProps> = ({ onClick, avatar }) => (
  <div
    className="chat:w-full chat:h-18
    chat:bg-darksLateGray chat:rounded-lg
    chat:px-3 chat:py-2 chat:cursor-pointer
    chat:flex chat:items-center chat:justify-between"
    onClick={onClick}
  >
    <div className='chat:flex chat:items-center chat:gap-2'>
      <div className='chat:rounded-full chat:w-15 chat:h-15 chat:overflow-hidden chat:bg-brown'>
        {!avatar ?
          <UserCircleIcon className='chat:w-full chat:h-full' />
          : <img src={avatar} className='chat:w-full chat:h-full' alt='avatar'/>
        }
      </div>
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
