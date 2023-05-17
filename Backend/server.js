import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/api', router);
app.get('/', (req, res) => {
  return res.send('testing');
});

app.use(notFound).use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
