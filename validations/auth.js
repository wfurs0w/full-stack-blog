import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Invalid mail format').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength( { min: 6 } ),
  body('fullName', 'Enter your name').isLength( { min: 3 } ),
  body('avatarUrl', 'Invalid URL').optional().isURL(),
];
