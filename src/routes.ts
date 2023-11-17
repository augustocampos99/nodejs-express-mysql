import express, { Router } from 'express';
import UserController from './controllers/user.controller';

export const router: Router = express.Router();

router.get('/', UserController.index);

