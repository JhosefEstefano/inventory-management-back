import express from 'express';
import { createUser } from '../controllers/UserController';

const router = express.Router();

router.post('/', createUser);

export default router;
