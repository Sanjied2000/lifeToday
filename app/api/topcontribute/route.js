import { connectMongoDB } from "@/lib/mongodb";
import Posts from "@/models/posts";

export async function GET() {
  try {
    await connectMongoDB();

    const topUsers = await Posts.aggregate([
      {
        $group: {
          _id: "$user_name",   // group by user_name
          postCount: { $sum: 1 }, // count number of posts
        },
      },
      {
        $sort: { postCount: -1 },
      },
      {
        $limit: 3,
      },
      {
        $project: {
          _id: 0,             
          userName: "$_id",   // rename _id → userName
          postCount: 1,       // keep postCount
        },
      },
    ]);

    return Response.json({ topUsers }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
