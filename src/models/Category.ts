import mongoose, { Schema, Document } from 'mongoose';

interface Category extends Document {
  name: string;
  code: string;
  description?: string;
  createdAt: Date;
  createdBy: mongoose.Types.ObjectId;
}

const CategorySchema: Schema<Category> = new Schema<Category>({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
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

export default mongoose.model<Category>('Category', CategorySchema);
