import express from 'express';
import {
  testing,
} from '../controllers/testController.js';

const TestRoutes = express.Router();

TestRoutes.get('/', testing);

export default TestRoutes;