import { connectMongoDB } from "@/lib/mongodb";
import Posts from "@/models/posts";

export async function GET(req, { params }) {
  try {
    const { user_id } = await params;
    await connectMongoDB();

   
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 5;

    
    const totalPosts = await Posts.countDocuments({ user_id });

 
    const allPosts = await Posts.find({ user_id })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return Response.json(
      {
        posts: allPosts,
        totalPages: Math.ceil(totalPosts / limit),
        currentPage: page,
      },
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
