import { ROUTERS } from '@/shared/lib/constants/routers.constant';
import { LinkRouter } from '@/shared/ui/link-router';

export const SignUp = () => (
  <div className='chat:max-w-xl chat:w-full chat:rounded-4xl chat:dark:bg-dark/60 chat:bg-white'>
    <div className='chat:py-20 chat:px-24 chat:w-full chat:h-full chat:flex chat:flex-col chat:gap-10'>

      <div className='chat:w-full chat:flex chat:justify-center chat:items-center'>
        <LinkRouter to={`/${ROUTERS.SIGN_IN}`}>Sign In</LinkRouter>
        <LinkRouter to={`/${ROUTERS.SIGN_UP}`}>Sign Up</LinkRouter>
      </div>

    </div>
  </div>
);
