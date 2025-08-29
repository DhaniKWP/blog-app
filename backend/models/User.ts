import mongoose, { Document, Schema } from "mongoose";

enum Role {
  USER = "user",
  ADMIN = "admin"
}

export interface IUser extends Document {
  username: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.USER },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
