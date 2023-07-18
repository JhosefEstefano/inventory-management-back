import mongoose, { Schema, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  code: string;
  value: number;
  stock: number;
  categoryId: mongoose.Types.ObjectId;
  brandId: mongoose.Types.ObjectId;
  imgUrl?: string;
  createdAt: Date;
  createdBy: mongoose.Types.ObjectId;
}

const ProductSchema: Schema<Product> = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  imgUrl: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model<Product>('Product', ProductSchema);
