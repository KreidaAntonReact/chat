import { UserCircleIcon } from '@heroicons/react/24/outline';

import type { FC } from 'react';

interface IAvatarProps {
    imageSrc?: string
}

export const Avatar: FC<IAvatarProps> = ({ imageSrc }) => (
  <div className='chat:rounded-full chat:w-15 chat:h-15 chat:overflow-hidden chat:bg-brown/30 chat:dark:bg-dark'>
    {!imageSrc ?
      <UserCircleIcon className='chat:w-full chat:h-full chat:dark:stroke-white chat:stroke-white/80' />
      : <img src={imageSrc} className='chat:w-full chat:h-full' alt='avatar'/>
    }
  </div>

);
