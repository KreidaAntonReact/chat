import { ChatMessage } from './chat-message';

export const ChatMessagesBlock = () => (
  <div className='chat:flex chat:flex-col chat:gap-3 chat:justify-center'>
    <div className='chat:text-white/80 chat:text-xl chat:text-center'>Date</div>
    <div className='chat:flex chat:flex-col chat:gap-5'>
      <ChatMessage/>
      <ChatMessage isMy/>
    </div>
  </div>
);
