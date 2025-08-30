import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./User";

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  author: IUser["_id"];
  tags: string[];
  categories?: string[];
  published: boolean;
}

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }],
    categories: [{ type: String }],
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Post = mongoose.model<IPost>("Post", postSchema);
