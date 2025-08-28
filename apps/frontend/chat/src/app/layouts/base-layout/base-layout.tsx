import { Outlet } from 'react-router';

import { CanvasPattern } from '@/shared/ui/canvas-pattern';
import { SidebarWrapper } from '@/widgets';

export const BaseLayout= () => (
  <div className='chat:flex chat:h-full chat:w-full'>
    <SidebarWrapper/>
    <div className='chat:flex chat:grow chat:max-w-full'>
      <CanvasPattern>
        <Outlet/>
      </CanvasPattern>
    </div>
  </div>
);
