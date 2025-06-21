import { createBrowserRouter, type RouteObject } from 'react-router';

import { AuthLayout, ChatLayout, PageLayout } from '@/app/layout';
import { InitGlobalProvider } from '@/app/providers';
import { ChatMemberId, SignIn, SignUp } from '@/pages';


export const routers: RouteObject[] = [
  {
    Component: InitGlobalProvider,
    children: [
      {
        path: '/',
        Component: PageLayout,
        children: [
          {
            Component: ChatLayout,
            path: 'chats',
            children: [
              {
                path: ':id',
                element: <ChatMemberId/>
              }
            ]
          }
        ]
      },
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
    ]
  }
];


export const router = createBrowserRouter(routers);

export default routers;
