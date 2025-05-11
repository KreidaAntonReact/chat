import { SidebarWrapper } from '@/widgets';
import './styles/main.css';
import 'vue_sidebar/styles';

export const App = () => (
  <div className='flex h-full'>
    <SidebarWrapper/>
    <div className='flex grow max-w-full'></div>
  </div>
);
