import { connectMongoDB } from "@/lib/mongodb";
import Posts from "@/models/posts";

export async function POST(req) {
  try {
    const body = await req.json();    

    const { user_id, user_name,url, title, category,content } = body;

    if (!user_id ||!user_name || !title || !category || !content) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }
    await connectMongoDB();

    await Posts.create({user_id,user_name,url,title,category,content});

    return new Response(JSON.stringify({ message: "Post created successfully" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
