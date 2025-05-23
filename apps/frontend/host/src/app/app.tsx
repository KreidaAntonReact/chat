import '@packages/event-bas';

import './styles/main.css';
import 'sidebar/styles';
import 'list/styles';

import { ChatList } from 'list/chat-list';

import { SidebarWrapper } from '@/widgets';


export const App = () => (
  <div className='flex h-full'>
    <SidebarWrapper/>
    <div className='flex grow max-w-full'>
      <ChatList/>
    </div>
  </div>
);
