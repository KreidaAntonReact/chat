import { cn } from '@packages/utils';
import { NavLink } from 'react-router';

import type { FC } from 'react';

interface ILinkRouterProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkRouter: FC<ILinkRouterProps> = ({ to, children, className }) => (
  <NavLink
    className={({ isActive }) => cn(`chat:p-[10px] chat:border-b
      chat:w-full chat:text-center chat:border-white/30
      chat:transition-colors chat:hover:border-white/60
      chat:text-white/30 chat:hover:text-white/60`,
    {
      'chat:border-white chat:dark:!border-white chat:!text-white': isActive
    },
    className)}
    to={to}
  >
    {children}
  </NavLink>
);
