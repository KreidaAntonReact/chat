import { isAxiosError } from 'axios';

import { instancePrivateWithInterceptors } from '@/shared/api/instance-private';

import type { IAxiosErrorData } from '@/shared/lib/interfaces/axios-error-data.interface';


export const getCheckSession = async () => {
  try {
    const { data } = await instancePrivateWithInterceptors.get<boolean>('/auth/check');

    return data;
  } catch (error: unknown) {
    if(isAxiosError<IAxiosErrorData>(error) && error?.response) {
      throw error;
    }

    throw new Error('Something went wrong!!!');
  }
};
