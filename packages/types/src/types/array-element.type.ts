export type TArrayElement<T extends unknown[] | undefined > =
  T extends Array<infer ElementType> ? ElementType : never;
