import { SendingMessage } from '@/features/sending-message';
import { ChatHeder, ChatMessages } from '@/widgets';

export const ChatMemberId = () => (
  <div className="chat:w-full chat:h-full chat:flex chat:flex-col chat:relative chat:left-0 chat:top-0">
    <ChatHeder/>
    <ChatMessages/>
    <SendingMessage/>
  </div>
);
