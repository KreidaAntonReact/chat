import { ROUTERS } from '@/shared/lib';
import { Link } from '@/shared/ui';

export const HeaderForm = () => (
  <div className='chat:w-full chat:flex chat:justify-center chat:items-center'>
    <Link to={`/${ROUTERS.SIGN_IN}`}>Sign In</Link>
    <Link to={`/${ROUTERS.SIGN_UP}`}>Sign Up</Link>
  </div>
);
