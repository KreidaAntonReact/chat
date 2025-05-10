import { SidebarWrapper } from '@/widgets';
import './styles/main.css';

export const App = () => (
  <div className='flex h-full'>
    <SidebarWrapper/>
    <div className='flex grow max-w-full'></div>
  </div>
);
