import type { ZodError } from 'zod';

interface IResultParse {
    [key: string]: string;
}

export const parseZodErrors = (errors: ZodError['issues']): IResultParse => {
  const result = errors.reduce<IResultParse>((acc, error) => {
    acc[error.path[0]] = error.message;
    return acc;
  }, {});

  return result;
};
