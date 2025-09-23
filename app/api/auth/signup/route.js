import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/users";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    
    await connectMongoDB();

    const existingUser = await User.findOne({ email });
    const existingName = await User.findOne({ name });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Email already registered" }),
        { status: 400 }
      );
    }
   if (existingName) {
      return new Response(
        JSON.stringify({ message: "Name already used. Try another Name.." }),
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

   
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ message: "User created successfully" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
