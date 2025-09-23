import mongoose, { Schema } from "mongoose";

const postsSchema = new Schema(
  {        
    user_id: {
      type: String,
      required: true,
      
    },
    user_name:{
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
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
  },
  { timestamps: true }
);

const Posts = mongoose.models.Posts || mongoose.model("Posts", postsSchema);

export default Posts;
