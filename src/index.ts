import { createApp } from './app';

const PORT = process.env.PORT || '9999';
const app = createApp();
app.listen(parseInt(PORT, 10));
