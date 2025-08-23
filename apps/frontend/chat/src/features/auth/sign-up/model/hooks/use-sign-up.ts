import { useMutation } from '@tanstack/react-query';
import { isAxiosError, type AxiosError   } from 'axios';
import { useNavigate } from 'react-router';


import { postSignUp } from '@/features/auth/sign-up/api';
import { ROUTERS } from '@/shared/lib/constants/routers.constant';


import type { TSignUpRequestSchema } from '@packages/contracts';

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate,
    isError,
    error,
    isPending
  } = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: async (body: TSignUpRequestSchema) => await postSignUp(body),
    onSuccess: () => navigate(`/${ROUTERS.SIGN_IN}`),
    onError:(error: Error | AxiosError) => {
      if (isAxiosError(error)) {
        return error.response?.data;
      }

      return error.message;
    }
  });

  return {
    handleSignUp: mutate,
    isError,
    error,
    isLoading: isPending
  };
};
