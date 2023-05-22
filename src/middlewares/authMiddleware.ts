import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import CustomRequest from '../models/types';

require('dotenv').config()


export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token,  process.env.secret_key!); // Verify and decode the token
    req.userId = (decoded as { userId: string }).userId; // Store the decoded userId in the request object
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token.' });
  }
};
