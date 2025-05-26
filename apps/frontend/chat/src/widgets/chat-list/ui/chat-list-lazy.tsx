import { lazy, Suspense } from 'react';

import { SkeletonChatList } from './skeleton-chat-list';

const ChatList = lazy(() => import('./chat-list').then((module) => ({ default: module.ChatList })));


export const ChatListLazy = () => (
  <Suspense fallback={<SkeletonChatList/>}>
    <ChatList/>
  </Suspense>
);
