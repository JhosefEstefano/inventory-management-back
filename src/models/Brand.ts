import mongoose, { Schema, Document } from 'mongoose';

export interface Brand extends Document {
  name: string;
  description: string;
  createdBy: mongoose.Types.ObjectId;
  logoUrl?: string;
  createdAt: Date;
}

const BrandSchema: Schema<Brand> = new Schema<Brand>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  logoUrl: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<Brand>('Brand', BrandSchema);
