import { UserCircleIcon } from '@heroicons/react/24/outline';

import type { FC } from 'react';

interface ICardProps {
    onClick?: () => void
    avatar?: string
}


export const Card: FC<ICardProps> = ({ onClick, avatar }) => (
  <div
    className="list:w-full list:h-18
    list:bg-darksLateGray list:rounded-lg
    list:px-3 list:py-2 list:cursor-pointer
    list:flex list:items-center list:justify-between"
    onClick={onClick}
  >
    <div className='list:flex list:items-center list:gap-2'>
      <div className='list:rounded-full list:w-15 list:h-15 list:overflow-hidden list:bg-brown'>
        {!avatar ?
          <UserCircleIcon className='list:w-full list:h-full' />
          : <img src={avatar} className='list:w-full list:h-full' alt='avatar'/>
        }
      </div>
      <div className='list:flex list:flex-col list:gap-1.5'>
        <div className='list:text-white/80 list:text-sm'>Name</div>
        <div className='list:text-white/80 list:text-sm'>Last message</div>
      </div>
    </div>

    <div className='list:w-5 list:h-5 list:bg-green-400 list:rounded-full list:text-center'>
      <div className='list:text-sm list:text-white/80'>1</div>
    </div>
  </div>
);
