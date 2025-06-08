import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import { Button, Textarea } from '@/shared';

export const SendingMessage = () => (
  <div className="chat:relative chat:top-0 chat:left-0 chat:z-10 chat:w-full
  chat:flex chat:items-center chat:justify-center">
    <Textarea
      classNameRoot='chat:max-w-[796px]'
      placeholder='Type a message...'
      mHeight={300}
      rows={4}
      suffix={<Button icon={PaperAirplaneIcon}/>}
    />
  </div>
);
