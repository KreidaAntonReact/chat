import { SignInResponseSchema } from '@packages/contracts';
import { isAxiosError, type AxiosResponse } from 'axios';
import { ZodError } from 'zod';

import { instanceShared } from '@/shared/api/instance-shared';

import type { IAxiosErrorData } from '@/shared/lib/interfaces/axios-error-data.interface';
import type { TSignInRequestSchema, TSignInResponseSchema } from '@packages/contracts';


export const postSignIn = async (body: TSignInRequestSchema): Promise<TSignInResponseSchema> => {
  try {
    const { data } = await instanceShared.post<AxiosResponse<TSignInResponseSchema>>('/auth/sign-in', body);
    const response = SignInResponseSchema.parse(data);
    return response;
  } catch (error) {
    if (isAxiosError<IAxiosErrorData>(error)) {
      throw error;
    }

    if (error instanceof ZodError) {
      throw error.errors;
    }

    throw new Error('Something went wrong!!!');
  }
};
