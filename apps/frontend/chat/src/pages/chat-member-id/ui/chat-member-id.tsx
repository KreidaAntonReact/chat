import { SendingMessage } from '@/features';
import { ChatHeder } from '@/widgets';

export const ChatMemberId = () => (
  <div className="chat:w-full chat:h-full chat:flex chat:flex-col">
    <ChatHeder/>
    <div className='chat:flex-[1_1_0]'/>
    <SendingMessage/>
  </div>
);
