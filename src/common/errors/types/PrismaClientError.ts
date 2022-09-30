import { PrismaClientUnknownRequestError } from '@prisma/client/runtime';

export type PrismaClientError = PrismaClientUnknownRequestError & {
  meta?: { target: string[] };
};
