import { SignInRequestSchema } from '@packages/contracts';
import { ZodError } from 'zod';

import { parseZodErrors } from '@/shared/lib/utils/parse-zod-errors.util';

import type { IFormData, IFormState } from '@/features/auth/sign-in/lib/interfaces';
import type { UseMutateFunction } from '@tanstack/react-query';

export const authHandle =  async <T, D> (
  prevState: IFormState,
  formData: FormData,
  postSignIn: UseMutateFunction<T, D, IFormData>
): Promise<IFormState> => {
  const entriesFormData = Object.fromEntries(formData.entries()) as unknown as IFormData;

  try {
    const checkedData = SignInRequestSchema.parse(entriesFormData);

    postSignIn(checkedData);

    return {
      data: checkedData,
      errors: null,
      isSuccess: true,
    };
  } catch (error) {
    let errors: Record<string, string> = {};

    if(error instanceof ZodError) {
      errors = parseZodErrors(error.issues);
    }

    return {
      ...prevState,
      data: entriesFormData,
      errors,
      isSuccess: false
    };
  }
};
