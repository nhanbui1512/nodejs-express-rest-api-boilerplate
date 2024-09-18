import express from 'express';
import route from '~/routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const hostname = 'localhost';
const port = process.env.PORT || 2000;

route(app);

app.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}/`);
});
