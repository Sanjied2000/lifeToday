import { connectMongoDB } from "@/lib/mongodb";
import Posts from "@/models/posts";

export async function GET(req, { params }) {
  try {
    await connectMongoDB();
    const { post_id } = await params;

    const Post = await Posts.findByIdAndUpdate(
      post_id,
      { $inc: { views: 1 } }, 
      { new: true }
    );
    if (!Post) {
      return Response.json({ message: "Post not found" }, { status: 404 });
    }

    return Response.json({ post: Post }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
export async function DELETE(req, { params }) {
  try {
    await connectMongoDB();
    const { post_id } = params;

    const deletedPost = await Posts.findByIdAndDelete(post_id);

    if (!deletedPost) {
      return Response.json({ message: "Post not found" }, { status: 404 });
    }

    return Response.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}