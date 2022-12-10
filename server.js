import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import { inValidRouteHandler } from './utils/invalidRouteHandler.js';
import EmailRoutes from './routes/emailRoutes.js';
import TestRoutes from './routes/testRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', TestRoutes);
app.use('/api', EmailRoutes);

app.use(inValidRouteHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`server running on port ${PORT}`.brightGreen));