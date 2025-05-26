import '@packages/event-bas';

import './styles/main.css';
import 'sidebar/styles';
import 'list/styles';

import { ChatList } from 'list/list';

import { SidebarWrapper } from '@/widgets';


export const App = () => (
  <div className='flex h-full w-full'>
    <div className='flex w-fit items-center flex-[1_1_0]'>
      <SidebarWrapper/>
      <ChatList/>
    </div>
    <div className='flex grow max-w-full'>
    </div>
  </div>
);
