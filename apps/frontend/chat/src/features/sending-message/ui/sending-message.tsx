import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

import { Button, Textarea } from '@/shared';

export const SendingMessage = () => (
  <div className="chat:w-full
  chat:flex chat:items-center chat:justify-center">
    <Textarea
      classNameRoot='chat:max-w-[796px]'
      placeholder='Type a message...'
      mHeight={300}
      suffix={<Button icon={PaperAirplaneIcon}/>}
    />
  </div>
);
