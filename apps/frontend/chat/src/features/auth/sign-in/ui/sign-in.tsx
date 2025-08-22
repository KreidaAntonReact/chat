import { useActionState } from 'react';

import { authHandle, type IFormState } from '@/features/auth/sign-in/lib';
import { ROUTERS } from '@/shared/lib/constants/routers.constant';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { InputPassword } from '@/shared/ui/input-password';
import { LinkRouter } from '@/shared/ui/link-router';


export const SignIn = () => {
  const [state, submitAction, isPending] = useActionState<IFormState, FormData>(authHandle, {
    data: null,
    errors: null,
    isSuccess: false
  });


  return (
    <div className='chat:max-w-xl chat:w-full chat:rounded-4xl chat:dark:bg-dark/60 chat:bg-white'>
      <div className='chat:py-20 chat:px-24 chat:w-full chat:h-full chat:flex chat:flex-col chat:gap-10'>

        <div className='chat:w-full chat:flex chat:justify-center chat:items-center'>
          <LinkRouter to={`/${ROUTERS.SIGN_IN}`}>Sign In</LinkRouter>
          <LinkRouter to={`/${ROUTERS.SIGN_UP}`}>Sign Up</LinkRouter>
        </div>

        <form
          className='chat:w-full chat:h-full chat:flex chat:flex-col chat:gap-5 chat:justify-between'
          action={submitAction}
        >
          <div className='chat:flex chat:flex-col chat:gap-3'>
            <div className='chat:flex chat:flex-col chat:gap-2 chat:w-full chat:h-full'>
              <Input
                placeholder='Username'
                name='username'
                type='text'
                defaultValue={state.data?.username}
                error={state.errors?.username}
              />
              <InputPassword
                placeholder='Password'
                name='password'
                defaultValue={state.data?.password}
                error={state.errors?.password}
              />
            </div>
            {state.errors?.message && (
              <span className='chat:text-red-600 chat:text-sm chat:relative chat:z-0
                  chat:animate-show chat:transform-[translateY(-50%)]'
              >
                {state.errors?.message}
              </span>)}
          </div>

          <Button type='submit' disabled={isPending}>Sign In</Button>
        </form>
      </div>
    </div>
  );
};
