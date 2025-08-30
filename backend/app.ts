import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import postRouter from './routes/post.routes';

const app = express();

// Middleware
app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('dev'));

// Routes
app.use('/api/blog/posts', postRouter);

export { app };

