import { ChatMessagesBlock } from './chat-messages-block';


export const ChatMessages = () => (
  <div className="chat:flex-[1_1_0] chat:w-full chat:h-full
    chat:overflow-y-auto chat:px-3 chat:flex chat:flex-col chat:items-center chat:justify-start">
    <div className="chat:w-full chat:max-w-[796px] chat:py-5">
      <ChatMessagesBlock/>
      <ChatMessagesBlock/>
      <ChatMessagesBlock/>
      <ChatMessagesBlock/>
      <ChatMessagesBlock/>
      <ChatMessagesBlock/>
    </div>
  </div>
);
