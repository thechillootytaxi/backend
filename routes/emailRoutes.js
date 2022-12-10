import express from 'express';
import {
  sendEmail,
} from '../controllers/emailController.js';

const EmailRoutes = express.Router();

EmailRoutes.post('/sendEmail', sendEmail);

export default EmailRoutes;