import { SidebarWrapper } from '@/widgets';
import '@packages/event-bas';
import './styles/main.css';

import 'vue_sidebar/styles';

export const App = () => {
  window.EventBas.on('change-router', (data) => {
    console.log(data);
  });

  return (
    <div className='flex h-full'>
      <SidebarWrapper/>
      <div className='flex grow max-w-full'></div>
    </div>
  );
};
