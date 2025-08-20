import { ROUTERS } from '@/shared/lib/constants/routers.constant';
import { LinkRouter } from '@/shared/ui/link-router';

export const HeaderForm = () => (
  <div className='chat:w-full chat:flex chat:justify-center chat:items-center'>
    <LinkRouter to={`/${ROUTERS.SIGN_IN}`}>Sign In</LinkRouter>
    <LinkRouter to={`/${ROUTERS.SIGN_UP}`}>Sign Up</LinkRouter>
  </div>
);
