import '@packages/event-bas';

import './styles/main.css';
import 'sidebar/styles';
import 'list/styles';

import { SidebarWrapper } from '@/widgets';
import { ChatList } from 'list/chat-list'


export const App = () => (
  <div className='flex h-full'>
    <SidebarWrapper/>
    <div className='flex grow max-w-full'>
      <ChatList/>
    </div>
  </div>
);
