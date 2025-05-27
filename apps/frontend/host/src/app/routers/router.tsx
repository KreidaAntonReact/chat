import routers from 'chat/routers';
import { createBrowserRouter } from 'react-router';

import { Layout } from '@/pages';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: routers
  }
]);
