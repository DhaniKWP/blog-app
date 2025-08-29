import mongoose, { Document, Model } from "mongoose";

interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
}

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name must be at most 50 characters long']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: [3, 'Slug must be at least 3 characters long'],
    maxlength: [50, 'Slug must be at most 50 characters long']
  },
  description: {
    type: String,
    maxlength: [200, 'Description must be at most 200 characters long']
  }
}, {timestamps: true});

const Category: Model<ICategory> = mongoose.model<ICategory>('Category', categorySchema);

export { Category };
export type { ICategory };
