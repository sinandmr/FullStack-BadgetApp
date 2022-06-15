import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Error Handler
import AppError from './utils/appError.js';
import GlobalErrorHandler from './middlewares/errorHandler.js';

import budgetRouter from './routes/budgetRouter.js';

const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful'));

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/', budgetRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(GlobalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server on -> http://localhost:${port}`);
});
