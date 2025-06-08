import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import { Textarea } from '@/shared';

export const SendingMessage = () => (
  <div className="chat:relative chat:top-0 chat:left-0 chat:z-10 chat:w-full
  chat:flex chat:items-center chat:justify-center">
    <Textarea
      classNameRoot='chat:max-w-[796px]'
      placeholder='Type a message...'
      mHeight={300}
      rows={4}
      suffix={
        <button className='chat:text-white/80 chat:bg-brown chat:rounded-full chat:p-2 chat:cursor-pointer'>
          <PaperAirplaneIcon className='chat:w-6 chat:h-6 '/>
        </button>
      }
    />
  </div>
);
