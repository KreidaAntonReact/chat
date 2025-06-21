import { createBrowserRouter, type RouteObject } from 'react-router';

import { AuthLayout, ChatLayout } from '@/app/layout';
import { ChatMemberId, SignIn, SignUp } from '@/pages';

export const routers: RouteObject[] = [
  {
    Component: AuthLayout,
    children: [
      {
        path: 'sign-up',
        element: <SignUp/>,
      },
      {
        path: 'sign-in',
        element: <SignIn/>,
      }
    ]
  },
  {
    Component: ChatLayout,
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
