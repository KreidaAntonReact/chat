import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { ChangeFiltersChats } from '@/features';
import { Card, Input } from '@/shared';

export const ChatList = () => {
  const handleOnClickChat = () => {
    window.EventBas.emit('change-chats', { chatId: '1' });
  };

  return (
    <div
      className="list:bg-dark list:max-w-[320px] list:w-full list:dark:bg-black
      list:text-2xl list:dark:text-white list:rounded-br-[5px]
      list:h-screen list:rounded-t-[0px]
      list:overflow-hidden"
    >
      <div className="list:px-3 list:py-[20px] list:h-full list:w-full list:flex list:flex-col list:gap-6">
        <Input prefix={<MagnifyingGlassIcon className="list:w-6 list:h-6 list:stroke-white/80" />} />

        <div className='list:flex list:gap-3 list:flex-col list:justify-center list:w-full'>
          <h1 className='list:text-2xl list:text-white/80'>Chats</h1>
          <ChangeFiltersChats/>
        </div>

        <div className='list:flex list:flex-col list:gap-3
        list:h-full list:w-full list:items-center
        list:overflow-y-auto list:py-1'
        >
          <Card
            onClick={handleOnClickChat}
          />
        </div>
      </div>
    </div>
  );
};
