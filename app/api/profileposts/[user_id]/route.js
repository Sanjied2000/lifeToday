import { connectMongoDB } from "@/lib/mongodb";
import Posts from "@/models/posts";

export async function GET(req,{ params }) {
  try {
    const { user_id } = await params;
    await connectMongoDB();

    const allPosts = await Posts.find({user_id}).sort({ createdAt: -1 }).limit(5);

    return Response.json(
      { posts: allPosts },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
