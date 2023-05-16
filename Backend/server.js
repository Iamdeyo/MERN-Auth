import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  return res.send('testing');
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
