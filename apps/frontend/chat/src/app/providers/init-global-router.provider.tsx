import { Outlet, useNavigate } from 'react-router';

import { globalRouter } from '@/shared/lib/utils/global-router.util';


export const InitGlobalProvider = () => {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

  return <Outlet/>;
};
