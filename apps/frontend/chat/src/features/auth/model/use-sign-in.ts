import { QueryClient, useMutation } from '@tanstack/react-query';
import { isAxiosError, type AxiosError } from 'axios';
import { ZodError } from 'zod';

import { postSignIn } from '@/features/auth/api';
import { QUERY_KEY } from '@/shared/lib/constants/query-key.constant';


import type { TSignInRequestSchema } from '@packages/contracts';


export const useSignIn = () => {
  const queryClient = new QueryClient();
  const {
    mutate,
    isPending,
    isSuccess,
    isError,
    error
  } = useMutation({
    mutationKey: [QUERY_KEY.ME],
    mutationFn: async (body: TSignInRequestSchema) => await postSignIn(body),
    onError: (error: Error | AxiosError | ZodError) => {
      if (isAxiosError(error)) {
        return error.response?.data;
      }

      if (error instanceof ZodError) {
        return error.errors;
      }

      return error.message;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.ME], data);
    }
  });


  return {
    signInHandle: mutate,
    isLoading: isPending,
    isSuccess,
    isError,
    error
  };
};
