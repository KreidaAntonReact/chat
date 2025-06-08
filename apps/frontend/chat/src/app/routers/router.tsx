import { createBrowserRouter, type RouteObject } from 'react-router';

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
    ]
  }
];


export const router = createBrowserRouter(routers);

export default routers;
