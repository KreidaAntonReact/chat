import { QueryClient, useMutation } from '@tanstack/react-query';
import { isAxiosError, type AxiosError } from 'axios';
import { useNavigate } from 'react-router';

import { postSignIn } from '@/features/auth/sign-in/api';
import { QUERY_KEY } from '@/shared/lib/constants/query-key.constant';
import { ROUTERS } from '@/shared/lib/constants/routers.constant';

import type { TSignInRequestSchema } from '@packages/contracts';


export const useSignIn = () => {
  const navigate = useNavigate();
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
    onError: (error: Error | AxiosError) => {
      if (isAxiosError(error)) {
        return error.response?.data;
      }

      return error.message;
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.ME], data);
      navigate(`/${ROUTERS.HOME}`);
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
