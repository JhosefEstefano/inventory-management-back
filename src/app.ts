import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db';

import userRoutes from './routers/UserRoutes';

const app = express();
const port = 3000;

connectDB(); // Call the database connection function

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});