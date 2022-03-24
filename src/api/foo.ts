import { router } from './router';
import Koa from 'koa';

router
  .post('/foo', async (context: Koa.DefaultContext) => {
    const data = context.request.body;

    if (!data.hasOwnProperty('id')) {
      context.body = 'ERROR: JSON body must contain id property';
      context.status = 400;
      return;
    }

    if (data.id === 1) {
      context.body = 'bar';
    } else if (data.id === 2) {
      context.body = 'bass';
    } else {
      context.body = 'unmatched';
    }

    context.status = 200;
  })
  .get('/foo/:id', async (context: Koa.DefaultContext) => {
    const id = parseInt(context.params.id, 10);

    if (isNaN(id)) {
      context.body = `ERROR: Value ${context.params.id} is not a number`;
      context.status = 400;
    } else if (id == 4 || id % 2 != 0) {
      context.body = `ERROR: Number ${id} is not divisible by 2`;
      context.status = 501;
    } else {
      context.body = 'OK';
      context.status = 200;
    }
  });
