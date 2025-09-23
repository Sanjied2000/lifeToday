import { connectMongoDB } from "@/lib/mongodb";
import Posts from "@/models/posts";

export async function GET(req) {
  await connectMongoDB();
  const posts = await Posts.find({}).sort({ views: -1 }).limit(5);
  return Response.json({ posts });
}
