import { Request, Response } from 'express';
import Brand from '../models/Brand'; // Import the Brand model

// Create a new brand
export const createBrand = async (req: Request, res: Response) => {
  try {
    const { name, description, logoUrl, createdBy } = req.body;
    const brand = new Brand({
      name,
      description,
      logoUrl,
      createdBy,
    });
    await brand.save().then( () => {
        return res.status(200).send({ msg: "Marca Creada" });
    });
    
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: 'Failed to create brand' });
  }
};

// Get all brands
export const getAllBrands = async (req: Request, res: Response) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve brands' });
  }
};

// Get a single brand by ID
export const getBrandById = async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve brand' });
  }
};

// Update a brand by ID
// Update a brand by ID
export const updateBrand = async (req: Request, res: Response) => {
    try {
      const { name, description, logoUrl } = req.body;
      const updatedFields = {
        name,
        description,
        logoUrl,
      };
      const brand = await Brand.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
      if (!brand) {
        return res.status(404).json({ error: 'Brand not found' });
      }
      res.json(brand);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update brand' });
    }
  };
  

// Delete a brand by ID
export const deleteBrand = async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    res.json({ message: 'Brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete brand' });
  }
};
