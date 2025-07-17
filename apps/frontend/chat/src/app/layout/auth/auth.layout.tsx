import { Outlet } from 'react-router';

export const AuthLayout = () => (
  <div className='chat:w-full chat:h-full chat:flex chat:justify-center chat:flex-col chat:items-center'>
    <Outlet/>
  </div>
);
