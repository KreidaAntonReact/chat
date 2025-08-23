import { parseZodErrors } from './parse-zod-errors.util';

import type { z } from 'zod';

interface IValidateDataArgs <T> {
    schema: z.ZodSchema<T>
    data: T,
    name: string,
    method?: string,
}

export const validateDataError = <T> ({
  schema, data, method = 'GET', name
}: IValidateDataArgs<T>): T => {
  const resultValidateData = schema.safeParse(data);

  if (resultValidateData.success) {
    return resultValidateData.data;
  }

  const errors = parseZodErrors(resultValidateData.error.issues);

  console.error('errors:', errors, 'method:', method, 'name:', name);

  return data;
};
