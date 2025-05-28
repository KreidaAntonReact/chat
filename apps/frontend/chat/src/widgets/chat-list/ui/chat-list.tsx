import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { ChangeFiltersChats } from '@/features';
import { Card, Input } from '@/shared';

export const ChatList = () => {
  const handleOnClickChat = () => {
    window.EventBas.emit('change-chats', { chatId: '1' });
  };

  return (
    <div
      className="chat:bg-dark chat:max-w-[320px] chat:w-full chat:dark:bg-black
      chat:text-2xl chat:dark:text-white
      chat:h-screen chat:rounded-t-[0px]
      chat:overflow-hidden"
    >
      <div className="chat:px-3 chat:py-[20px] chat:h-full chat:w-full chat:flex chat:flex-col chat:gap-6">
        <Input prefix={<MagnifyingGlassIcon className="chat:w-6 chat:h-6 chat:stroke-white/80" />} />

        <div className='chat:flex chat:gap-3 chat:flex-col chat:justify-center chat:w-full'>
          <h1 className='chat:text-2xl chat:text-white/80'>Chats</h1>
          <ChangeFiltersChats/>
        </div>

        <div className='chat:flex chat:flex-col chat:gap-3
        chat:h-full chat:w-full chat:items-center
        chat:overflow-y-auto chat:py-1'
        >
          <Card
            onClick={handleOnClickChat}
          />
        </div>
      </div>
    </div>
  );
};
