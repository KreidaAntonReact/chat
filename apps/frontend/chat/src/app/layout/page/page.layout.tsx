import { Outlet } from 'react-router';

import { CanvasPattern } from '@/shared';
import { SidebarWrapper } from '@/widgets';

export const PageLayout = () => (
  <div className='chat:flex chat:h-full chat:w-full'>
    <SidebarWrapper/>
    <div className='chat:flex chat:grow chat:max-w-full'>
      <CanvasPattern>
        <Outlet/>
      </CanvasPattern>
    </div>
  </div>
);
