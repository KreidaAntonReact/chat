import { UserCircleIcon } from '@heroicons/react/24/outline';

import type { FC } from 'react';

interface IAvatarProps {
    imageSrc?: string
}

export const Avatar: FC<IAvatarProps> = ({ imageSrc }) => (
  <div className='chat:rounded-full chat:w-15 chat:h-15 chat:overflow-hidden chat:bg-brown'>
    {!imageSrc ?
      <UserCircleIcon className='chat:w-full chat:h-full' />
      : <img src={imageSrc} className='chat:w-full chat:h-full' alt='avatar'/>
    }
  </div>

);
