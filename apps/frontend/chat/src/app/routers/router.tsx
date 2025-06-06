import { createHashRouter, type RouteObject } from 'react-router';

import { Layout } from '@/app/layout';
import { ChatMemberId } from '@/pages/';

export const routers: RouteObject[] = [
  {
    Component: Layout,
    path: '/',
    children: [
      {
        path: ':id',
        element: <ChatMemberId/>,
      },
      {
        path: 'home',
        element: <div>Chat</div>,
      }
    ]
  }
];


export const router = createHashRouter(routers);

export default routers;
