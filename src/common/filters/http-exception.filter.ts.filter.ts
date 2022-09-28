import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class HttpExceptionFilterTsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
