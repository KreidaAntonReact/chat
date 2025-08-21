import { SignInRequestSchema } from '@packages/contracts';
import { isAxiosError } from 'axios';
import { ZodError } from 'zod';

import { postSignIn } from '@/features/auth/sign-in/api';
import { parseZodErrors } from '@/shared/lib/utils/parse-zod-errors.util';

import type { IFormData, IFormState } from '@/features/auth/sign-in/lib/interfaces';
import type { IAxiosErrorData } from '@/shared/lib/interfaces/axios-error-data.interface';

export const authHandle = async (prevState: IFormState, formData: FormData): Promise<IFormState> => {
  const entriesFormData = Object.fromEntries(formData.entries()) as unknown as IFormData;

  try {
    const checkedData = SignInRequestSchema.parse(entriesFormData);

    await postSignIn(checkedData);

    return {
      data: null,
      errors: null,
      isSuccess: true,
    };
  } catch (error) {
    let errors: Record<string, string> = {};

    if(error instanceof ZodError) {
      errors = parseZodErrors(error.issues);
    }

    if (isAxiosError<IAxiosErrorData>(error) && error?.response) {
      errors['message'] = error.response.data.message;
    }

    return {
      ...prevState,
      data: entriesFormData,
      errors,
      isSuccess: false
    };
  }
};
