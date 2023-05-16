import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/api', router);
app.get('/', (req, res) => {
  return res.send('testing');
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
