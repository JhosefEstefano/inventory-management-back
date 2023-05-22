import express from 'express';
import { body } from 'express-validator';
import {
    createBrand,
    getAllBrands,
    getBrandById,
    updateBrand,
    deleteBrand,
} from '../controllers/BranController';

import { verifyToken } from '../middlewares/authMiddleware';


const router = express.Router();

router.post('/', [verifyToken,
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    // Additional validation rules if needed
], createBrand);

router.get('/', [verifyToken],getAllBrands);

router.get('/:id',[verifyToken], getBrandById);

router.put('/:id', [
    verifyToken,
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required')
], updateBrand);

router.delete('/:id',[verifyToken], deleteBrand);

export default router;
