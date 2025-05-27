import { Outlet } from 'react-router';

import { SidebarWrapper } from '@/widgets';

export const Layout = () => (
  <div className='flex h-full w-full'>
    <SidebarWrapper/>
    <div className='flex grow max-w-full'>
      <Outlet/>
    </div>
  </div>
);
