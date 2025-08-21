import { SignUpRequestSchema, type TSignUpRequestSchema } from '@packages/contracts';
import { isAxiosError } from 'axios';
import { ZodError } from 'zod';

import { instanceShared } from '@/shared/api/instance-shared';

import type { IAxiosErrorData } from '@/shared/lib/interfaces/axios-error-data.interface';
import type { AxiosResponse } from 'axios';


export const postSignUp = async (body: TSignUpRequestSchema): Promise<TSignUpRequestSchema> => {
  try {
    const { data } = await instanceShared.post<AxiosResponse<TSignUpRequestSchema>>('/auth/sign-up', body);
    const response = SignUpRequestSchema.parse(data);

    return response;
  } catch (error) {
    if(isAxiosError<IAxiosErrorData>(error)) {
      throw error.response?.data;
    }

    if(error instanceof ZodError) {
      throw error.errors;
    }

    throw new Error('Something went wrong!!!');
  }
};
