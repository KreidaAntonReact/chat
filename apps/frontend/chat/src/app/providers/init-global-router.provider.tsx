import { Outlet, useNavigate } from 'react-router';

import { globalRouter } from '@/shared';


export const InitGlobalProvider = () => {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

  return <Outlet/>;
};
