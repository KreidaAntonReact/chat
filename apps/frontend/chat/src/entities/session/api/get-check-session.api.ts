import { isAxiosError } from 'axios';

import { instancePrivateWithInterceptors } from '@/shared/api';

import type { IAxiosErrorData } from '@/shared/lib';


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
