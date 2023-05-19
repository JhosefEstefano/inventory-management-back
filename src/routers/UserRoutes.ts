import express from 'express';
import { Request, Response } from 'express';
import { body } from 'express-validator';
import { createUser, getUserById, getUsers, loginUser } from '../controllers/UserController';
import { createUserValidationRules } from '../middlewares/userValidators';
import { validationResult } from 'express-validator';
import { verifyToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', createUserValidationRules, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    createUser(req, res);
});

router.post(
    '/login',
    [
      body('email').notEmpty().isEmail().withMessage('Email is required'),
      body('password').notEmpty().withMessage('Password is required'),
    ],
    loginUser
  );

router.get('/:id', [verifyToken], getUserById);
router.get('', [verifyToken], getUsers);



export default router;
