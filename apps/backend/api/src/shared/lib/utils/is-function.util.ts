export const isFunction = (value: unknown): value is typeof Function => {
  if (typeof value === 'function') {
    return true;
  }
  return false;
};
