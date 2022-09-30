import { PrismaClientError } from '../types/PrismaClientError';

export const isPrismaError = (e: PrismaClientError) => {
  return (
    typeof e.clientVersion === 'string' &&
    typeof e.message === 'string' &&
    (typeof e.meta === 'undefined' || typeof e.meta === 'object')
  );
};
