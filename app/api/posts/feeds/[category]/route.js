import { connectMongoDB } from "@/lib/mongodb";
import Posts from "@/models/posts";

export async function GET(req, { params }) {
  try {
    const { category } = await params; 
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "";
    const page = parseInt(searchParams.get("page") || "1", 10); // ✅ page number
    const limit = 5;
    const skip = (page - 1) * limit;

    await connectMongoDB();

    let query = category === "none" ? {} : { category };
    let sort = { createdAt: -1 };

    if (type === "old") sort = { createdAt: 1 };
    else if (type === "mview") sort = { views: -1 };

    const allPosts = await Posts.find(query).sort(sort).skip(skip).limit(limit);

    const total = await Posts.countDocuments(query);

    return Response.json(
      { posts: allPosts, total, page, totalPages: Math.ceil(total / limit) },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
