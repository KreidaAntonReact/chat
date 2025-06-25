import { createBrowserRouter, type RouteObject } from 'react-router';

import { AuthLayout, ChatLayout, PageLayout } from '@/app/layout';
import { CheckSessionProvider, InitGlobalProvider } from '@/app/providers';
import { ChatMemberId, SignIn, SignUp } from '@/pages';
import { ROUTERS } from '@/shared';


export const routers: RouteObject[] = [
  {
    Component: InitGlobalProvider,
    children: [
      {
        path: ROUTERS.HOME,
        element: (
          <CheckSessionProvider>
            <PageLayout/>
          </CheckSessionProvider>
        ),
        children: [
          {
            Component: ChatLayout,
            path: ROUTERS.CHATS,
            children: [
              {
                path: ROUTERS.CHAT_MEMBER_ID,
                element: (
                  <CheckSessionProvider>
                    <ChatMemberId/>
                  </CheckSessionProvider>
                )
              }
            ]
          }
        ]
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: ROUTERS.SIGN_UP,
            element: <SignUp/>,
          },
          {
            path: ROUTERS.SIGN_IN,
            element: <SignIn/>,
          }
        ]
      },
    ]
  }
];


export const router = createBrowserRouter(routers);

export default routers;
