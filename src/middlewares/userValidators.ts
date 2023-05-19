import { body } from 'express-validator';

export const createUserValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').notEmpty().isEmail().withMessage('Email is required'),
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
