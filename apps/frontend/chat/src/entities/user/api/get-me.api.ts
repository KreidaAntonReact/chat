import { meResponseSchema, type TMeResponse } from '@packages/contracts';
import { isAxiosError } from 'axios';
import { z } from 'zod';

import { instancePrivateWithInterceptors } from '@/shared/api';

import type { IAxiosErrorData } from '@/shared/lib';

export const getMe = async (): Promise<TMeResponse> => {
  try {
    const response = meResponseSchema.parseAsync(await instancePrivateWithInterceptors.get<TMeResponse>('/user/me'));

    return response;
  } catch (error) {
    if(isAxiosError<IAxiosErrorData>(error)) {
      throw error.response?.data;
    }

    if(error instanceof z.ZodError) {
      throw error;
    }

    throw new Error('Something went wrong!!!');
  }
};
