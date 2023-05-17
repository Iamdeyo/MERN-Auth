import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import router from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

connectDB();

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
