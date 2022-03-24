import Koa from 'koa';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const errorHandling = async (
  ctx: Koa.BaseContext,
  next: () => // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Promise<any>,
): Promise<void> => {
  try {
    return await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message || 'Internal server error';
  }
};
