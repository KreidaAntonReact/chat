import { SignInResponseSchema } from '@packages/contracts';
import { isAxiosError, type AxiosResponse } from 'axios';

import { instancePrivateWithInterceptors } from '@/shared/api/instance-private';
import { validateDataError } from '@/shared/lib/utils/validate-data-error.util';

import type { IAxiosErrorData } from '@/shared/lib/interfaces/axios-error-data.interface';
import type { TSignInRequestSchema, TSignInResponseSchema } from '@packages/contracts';


export const postSignIn = async (body: TSignInRequestSchema): Promise<TSignInResponseSchema> => {
  try {
    const { data } = await instancePrivateWithInterceptors.post<
    TSignInResponseSchema,
    AxiosResponse<TSignInResponseSchema>,
    TSignInRequestSchema>('/auth/sign-in', body);

    const response = validateDataError({
      schema: SignInResponseSchema,
      data,
      method: 'POST',
      name: 'postSignIn'
    });

    return response;
  } catch (error) {
    if (isAxiosError<IAxiosErrorData>(error)) {
      throw error.response?.data;
    }

    throw new Error('Something went wrong!!!');
  }
};
