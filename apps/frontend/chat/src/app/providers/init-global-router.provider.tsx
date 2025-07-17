import { Outlet, useNavigate } from 'react-router';

import { globalRouter } from '@/shared/lib';


export const InitGlobalProvider = () => {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

  return <Outlet/>;
};
