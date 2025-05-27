import { Outlet } from 'react-router';

import { ChatList } from '@/widgets';

export const Layout = () => (
  <div className='chat:w-full chat:h-full chat:flex chat:flex-[1_1_0]'>
    <ChatList/>
    <Outlet/>
  </div>
);
