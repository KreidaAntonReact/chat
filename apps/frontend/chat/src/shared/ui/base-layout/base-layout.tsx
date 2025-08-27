import { CanvasPattern } from '@/shared/ui/canvas-pattern';

import type { FC, ReactNode } from 'react';


interface IBaseLayoutProps {
    sidebarSlot?: ReactNode;
    children?: ReactNode
}

export const BaseLayout:FC<IBaseLayoutProps> = ({ sidebarSlot, children }) => (
  <div className='chat:flex chat:h-full chat:w-full'>
    {sidebarSlot}
    <div className='chat:flex chat:grow chat:max-w-full'>
      <CanvasPattern>
        {children}
      </CanvasPattern>
    </div>
  </div>
);

