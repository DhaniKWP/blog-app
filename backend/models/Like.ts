import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";
import { IPost } from "./Post";
import { IComment } from "./Comment";

export interface ILike extends Document {
  user: IUser["_id"];       // siapa yang nge-like
  post?: IPost["_id"];      // like ke post (opsional)
  comment?: IComment["_id"]; // like ke comment (opsional)
  createdAt: Date;
}

const likeSchema = new Schema<ILike>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

likeSchema.index({ user: 1, post: 1 }, { unique: true, sparse: true });
likeSchema.index({ user: 1, comment: 1 }, { unique: true, sparse: true });

const Like = mongoose.model<ILike>("Like", likeSchema);

export { Like };
