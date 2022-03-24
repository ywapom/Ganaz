import { router } from './router';
import Koa from 'koa';
export const HEALTHCHECK_PATH = '/healthx';

// a simple healthcheck for readiness probe
router.get(HEALTHCHECK_PATH, async (ctx: Koa.BaseContext) => {
  ctx.body = 'OK';
  ctx.status = 200;
});
