import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { ChangeFiltersChats } from '@/features';
import { Input } from '@/shared';

export const ChatList = () => (
  <div
    className="list:bg-dark list:max-w-[320px] list:dark:bg-black
      list:text-2xl list:dark:text-white list:rounded-br-[5px]
      list:w-full list:h-screen list:rounded-t-[0px]
      list:overflow-hidden"
  >
    <div className="list:px-3 list:py-[20px] list:h-full list:w-full list:flex list:flex-col list:gap-3">
      <Input prefix={<MagnifyingGlassIcon className="list:w-6 list:h-6 list:stroke-white/80" />} />

      <h1 className='list:text-2xl list:text-white/80'>Chats</h1>

      <div>
        <ChangeFiltersChats/>
      </div>
    </div>
  </div>

);
