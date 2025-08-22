import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ROUTERS } from '@/shared/lib/constants/routers.constant';
import { Button } from '@/shared/ui/button';
import { InputForm } from '@/shared/ui/input-form';
import { InputPasswordForm } from '@/shared/ui/input-password-form';
import { LinkRouter } from '@/shared/ui/link-router';

import { SignUpFormSchema, type TSignUpFormSchema } from '../model';

import type { SubmitHandler } from 'react-hook-form';


const DEFAULT_VALUES: TSignUpFormSchema = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  username: '',
  confirmPassword: '',
};

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {
      isLoading,
      errors,
    }
  } = useForm<TSignUpFormSchema>({
    resolver: zodResolver(SignUpFormSchema),
    mode: 'onSubmit',
    defaultValues: DEFAULT_VALUES,
    reValidateMode: 'onChange'
  });

  const isError = !!Object.keys(errors).length;

  const handleOnSubmit: SubmitHandler<TSignUpFormSchema> = () => {};

  return (
    <div className='chat:max-w-xl chat:w-full chat:rounded-4xl chat:dark:bg-dark/60 chat:bg-white chat:flex-1'>
      <div className='chat:py-20 chat:px-24 chat:h-full chat:w-full chat:flex chat:flex-col chat:gap-10'>

        <div className='chat:w-full chat:flex chat:justify-center chat:items-center'>
          <LinkRouter to={`/${ROUTERS.SIGN_IN}`}>Sign In</LinkRouter>
          <LinkRouter to={`/${ROUTERS.SIGN_UP}`}>Sign Up</LinkRouter>
        </div>


        <form
          className='chat:w-full chat:h-full chat:flex chat:flex-col chat:gap-5 chat:justify-between'
          onSubmit={handleSubmit(handleOnSubmit)}
        >

          <div className='chat:flex chat:flex-col chat:gap-2 chat:w-full chat:h-full'>
            <InputForm
              control={control}
              name='firstName'
              placeholder='First Name'
            />

            <InputForm
              control={control}
              name='lastName'
              placeholder='Last Name'
            />

            <InputForm
              control={control}
              name='username'
              placeholder='Username'
            />


            <div className='chat:flex chat:gap-2'>
              <InputPasswordForm
                control={control}
                name='password'
                placeholder='Password'
                classNameWrapper='chat:shrink chat:flex-1'
              />

              <InputPasswordForm
                control={control}
                name='confirmPassword'
                placeholder='Confirm Password'
                classNameWrapper='chat:shrink chat:flex-1'
              />
            </div>

            <InputForm
              control={control}
              name='email'
              placeholder='Email'
            />

          </div>

          <Button type='submit' disabled={isLoading || isError}>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};
