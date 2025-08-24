import { CheckResponseSchema, type TCheckResponse } from '@packages/contracts';
import { isAxiosError } from 'axios';

import { instancePrivateWithInterceptors } from '@/shared/api/instance-private';
import { validateDataError } from '@/shared/lib/utils/validate-data-error.util';

import type { IAxiosErrorData } from '@/shared/lib/interfaces/axios-error-data.interface';


export const getCheckSession = async (): Promise<boolean> => {
  try {
    const { data } = await instancePrivateWithInterceptors.get<TCheckResponse>('/auth/check');

    const response = validateDataError({
      schema: CheckResponseSchema,
      data,
      method: 'GET',
      name: 'getCheckSession'
    });

    return response.message;
  } catch (error: unknown) {
    if(isAxiosError<IAxiosErrorData>(error) && error?.response) {
      throw error;
    }

    throw new Error('Something went wrong!!!');
  }
};
