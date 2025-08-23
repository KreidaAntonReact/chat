import { SignUpResponseSchema, type TSignUpResponseSchema, type TSignUpRequestSchema } from '@packages/contracts';
import { isAxiosError } from 'axios';

import { instanceShared } from '@/shared/api/instance-shared';
import { validateDataError } from '@/shared/lib/utils/validate-data-error.util';

import type { IAxiosErrorData } from '@/shared/lib/interfaces/axios-error-data.interface';
import type { AxiosResponse } from 'axios';


export const postSignUp = async (body: TSignUpRequestSchema): Promise<TSignUpResponseSchema> => {
  try {
    const { data } = await instanceShared.post<TSignUpResponseSchema, AxiosResponse<TSignUpResponseSchema>, TSignUpRequestSchema>('/auth/sign-up', body);

    const response = validateDataError({
      schema: SignUpResponseSchema,
      data,
      method: 'POST',
      name: 'postSignUp'
    });

    return response;
  } catch (error) {
    if(isAxiosError<IAxiosErrorData>(error)) {
      throw error.response?.data;
    }

    throw new Error('Something went wrong!!!');
  }
};
