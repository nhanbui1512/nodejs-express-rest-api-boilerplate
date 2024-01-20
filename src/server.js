import express from 'express';
import route from '~/routes';
const app = express();

const hostname = 'localhost';
const port = 3000;

route(app);

app.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}/`);
});
