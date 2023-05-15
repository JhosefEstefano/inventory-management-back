import { Request, Response } from 'express';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, password, status } = req.body;
    const user = new User({ name, password, status });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};
