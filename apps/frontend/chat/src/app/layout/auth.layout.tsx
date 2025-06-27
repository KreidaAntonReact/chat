import { Outlet } from 'react-router';

export const AuthLayout = () => (
  <div className='chat:w-full chat:h-fill'>
    <Outlet/>
  </div>
);
