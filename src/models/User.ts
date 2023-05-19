import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  status: string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
