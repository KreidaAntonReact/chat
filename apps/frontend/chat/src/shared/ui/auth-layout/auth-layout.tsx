import { Outlet } from 'react-router';

export const AuthLayout = () => (
  <div className='chat:w-full chat:flex chat:h-full chat:justify-center chat:flex-col chat:items-center'>
    <Outlet/>
  </div>
);
