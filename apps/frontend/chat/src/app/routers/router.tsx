import { createBrowserRouter, type RouteObject } from 'react-router';

import { Layout } from '@/app/layout';

export const routers: RouteObject[] = [
  {
    Component: Layout,
    path: '/',
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: '/home',
        element: <div>Chat</div>,
      }
    ]
  }
];


export const router = createBrowserRouter(routers);

export default routers;
