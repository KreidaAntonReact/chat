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
    className={({ isActive }) => cn(`chat:p-[10px] chat:border-b chat:w-full chat:text-center
      chat:border-brown/30 chat:dark:border-white/30
      chat:transition-colors chat:hover:border-brown chat:dark:hover:border-white/60
      chat:text-brown chat:dark:text-white/80`,
    {
      'chat:border-brown chat:dark:!border-white chat:!text-white': isActive
    },
    className)}
    to={to}
  >
    {children}
  </NavLink>
);
