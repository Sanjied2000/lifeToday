import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    user_name: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true },
);

const postsSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      default: "unpublished",
    },
    stars: {
      type: Number,
      default: 0,
    },
    comments: [commentSchema],
  },
  { timestamps: true },
);

const Posts = mongoose.models.Posts || mongoose.model("Posts", postsSchema);

export default Posts;
