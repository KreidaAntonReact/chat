import { Outlet } from 'react-router';

import { BaseLayout } from '@/shared/ui/base-layout';
import { SidebarWrapper } from '@/widgets';

export const BaseLayoutProvider = () => (
  <BaseLayout sidebarSlot={<SidebarWrapper/>}>
    <Outlet/>
  </BaseLayout>
);
