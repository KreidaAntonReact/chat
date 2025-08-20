import { SignInResponseSchema } from '@packages/contracts';
import { isAxiosError } from 'axios';
import { z } from 'zod';

import { instanceShared } from '@/shared/api/instance-shared';

import type { TSignInRequestSchema, TSignInResponseSchema } from '@packages/contracts';
import type { AxiosResponse } from 'axios';


export const postSignIn = async (body: TSignInRequestSchema): Promise<TSignInResponseSchema> => {
  try {

    const { data } = await instanceShared.post<AxiosResponse<TSignInResponseSchema>>('/auth/sign-in', body);
    const response = SignInResponseSchema.parse(data);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }

    if (error instanceof z.ZodError) {
      throw error.errors;
    }

    throw new Error('Something went wrong!!!');
  }
};
