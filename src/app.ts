import Koa from 'koa';
import logger from 'koa-pino-logger';
import bodyParser from 'koa-body';
import { router } from './api';
import { errorHandling } from './middleware/error-handling';

export function createApp(): Koa {
  // create base koa app
  const app = new Koa();
  // trust x-forwarded-* headers
  app.proxy = true;
  // use the built-in middleware to log the info
  app.use(logger());
  // use the custom middleware to try/catch app exceptions
  app.use(errorHandling);
  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());

  return app;
}
