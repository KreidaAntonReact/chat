import { Outlet } from 'react-router';

import { CanvasPattern } from '@/shared';
import { ChatList } from '@/widgets';

export const Layout = () => (
  <div className='chat:w-full chat:h-full chat:flex chat:flex-[1_1_0]'>
    <ChatList/>
    <div
      className='chat:relative chat:left-0
        chat:top-0 chat:overflow-hidden
        chat:w-full chat:h-full'
    >
      <CanvasPattern>
        <Outlet/>
      </CanvasPattern>
    </div>
  </div>
);
