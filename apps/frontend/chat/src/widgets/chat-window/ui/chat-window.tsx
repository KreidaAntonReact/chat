import { SendingMessage } from '@/features/sending-message';

import { ChatHeder } from './chat-header';
import { ChatMessages } from './chat-messages';

export const ChatWindow = () => (
  <div className="chat:w-full chat:h-full chat:flex chat:flex-col chat:relative chat:left-0 chat:top-0">
    <div className="chat:w-full chat:h-20 chat:bg-dark
    chat:dark:bg-black chat:flex chat:items-center
    chat:px-3 chat:py-[20px]"
    >
      <ChatHeder/>
    </div>
    <div className="chat:flex-[1_1_0] chat:w-full chat:h-full
        chat:overflow-y-auto chat:px-3 chat:flex chat:flex-col
        chat:items-center chat:justify-start"
    >
      <div className="chat:w-full chat:max-w-[796px] chat:py-5">
        <ChatMessages/>
      </div>
    </div>
    <div className="chat:w-full chat:flex
        chat:items-center chat:justify-center"
    >
      <SendingMessage/>
    </div>
  </div>
);
