import { SignInRequestSchema } from '@packages/contracts';
import { useActionState } from 'react';
import { ZodError } from 'zod';

import { postSignIn } from '@/features/auth/api';
import { ROUTERS } from '@/shared/lib';
import { parseZodErrors } from '@/shared/lib/util';
import {
  Button,
  Input,
  InputPassword,
  Link
} from '@/shared/ui';


import type { IFormState } from '@/features/auth/lib';

export const SignIn = () => {
  const authHandle = async (prevState: IFormState, formData: FormData) => {
    try {
      const data = Object.fromEntries(formData.entries());
      const checkedData = SignInRequestSchema.parse(data);

      await postSignIn(checkedData);

      return {
        data: null,
        errors: null
      };
    } catch (error) {
      if(error instanceof ZodError) {
        console.log(error.issues);

        const errorsParse = parseZodErrors(error.issues);

        return {
          data: {
            username: formData.get('username') as string,
            password: formData.get('password') as string
          },
          errors: errorsParse
        };
      }

      return {
        ...prevState,
        errors: null
      };
    }
  };

  const [state, submitAction] = useActionState<IFormState, FormData>(authHandle, {
    data: null,
    errors: null
  });


  return (
    <div className='chat:max-w-xl chat:w-full chat:rounded-4xl chat:dark:bg-dark/60 chat:bg-white'>
      <div className='chat:py-20 chat:px-24 chat:w-full chat:h-full chat:flex chat:flex-col chat:gap-10'>

        <div className='chat:w-full chat:flex chat:justify-center chat:items-center'>
          <Link to={`/${ROUTERS.SIGN_IN}`}>Sign In</Link>
          <Link to={`/${ROUTERS.SIGN_UP}`}>Sign Up</Link>
        </div>

        <form
          className='chat:w-full chat:h-full chat:flex chat:flex-col chat:gap-5 chat:justify-end'
          action={submitAction}
        >
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
          <Button type='submit'>Login</Button>
        </form>
      </div>
    </div>
  );
};
