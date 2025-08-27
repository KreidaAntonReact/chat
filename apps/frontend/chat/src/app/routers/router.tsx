import { createBrowserRouter, type RouteObject } from 'react-router';

import {
  BaseLayoutProvider,
  ChatsLayoutProvider,
  CheckSessionProvider,
  InitGlobalProvider,
} from '@/app/providers';
import { ChatPage, SignInPage, SignUpPage } from '@/pages';
import { ROUTERS } from '@/shared/lib/constants/routers.constant';
import { AuthLayout } from '@/shared/ui/auth-layout';


export const routers: RouteObject[] = [
  {
    Component: InitGlobalProvider,
    children: [
      {
        path: ROUTERS.HOME,
        element: (
          <CheckSessionProvider>
            <BaseLayoutProvider/>
          </CheckSessionProvider>
        ),
        children: [
          {
            Component: ChatsLayoutProvider,
            path: ROUTERS.CHATS.INDEX,
            children: [
              {
                path: ROUTERS.CHATS.CHAT_ID(':id'),
                element: (
                  <CheckSessionProvider>
                    <ChatPage/>
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
            element: <SignUpPage/>,
          },
          {
            path: ROUTERS.SIGN_IN,
            element: <SignInPage/>,
          }
        ]
      },
    ]
  }
];


export const router = createBrowserRouter(routers);

export default routers;
