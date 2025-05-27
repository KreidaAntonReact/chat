import { createBrowserRouter } from 'react-router';

import { Layout } from '@/pages';

export const routers = [
  {
    Component: Layout,
    path: '/',
    children: [
      {
        index: true,
        element: <div>Home</div>
      }
    ]
  }
];


export const router = createBrowserRouter(routers);

export default routers;
