import { Outlet } from 'react-router';

import { ChatsLayout } from '@/shared/ui/chats-layout';
import { ChatList } from '@/widgets';

export const ChatsLayoutProvider = () => (
  <ChatsLayout chatListSlot={<ChatList/>}>
    <Outlet/>
  </ChatsLayout>
);
