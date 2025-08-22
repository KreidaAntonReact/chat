import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router';
import { ZodError } from 'zod';

import { ROUTERS } from '@/shared/lib/constants/routers.constant';

import { postSignUp } from '../../api';

import type { TSignUpRequestSchema } from '@packages/contracts';
import type { AxiosError } from 'axios';

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate,
    isError,
    error,
    isPending
  } = useMutation({
    mutationFn: async (body: TSignUpRequestSchema) => await postSignUp(body),
    onSuccess: () => {
      navigate(ROUTERS.SIGN_IN);
    },
    onError:(error: Error | AxiosError | ZodError) => {
      if (isAxiosError(error)) {
        return error.response?.data;
      }

      if (error instanceof ZodError) {
        return error.errors;
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
