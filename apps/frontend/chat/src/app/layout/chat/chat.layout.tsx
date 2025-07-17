import { Outlet } from 'react-router';


import { ChatList } from '@/widgets';

export const ChatLayout = () => (
  <div className='chat:relative chat:w-full chat:h-full chat:flex chat:flex-[1_1_0]'>
    <ChatList/>
    <div
      className='chat:relative chat:left-0
        chat:top-0 chat:overflow-hidden
        chat:w-full chat:h-full'
    >
      <Outlet/>
    </div>
  </div>
);
