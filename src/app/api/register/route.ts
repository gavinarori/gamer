// API route for user registration (register.ts)
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { username, email, password } = await request.json();

  console.log("Received request:", { username, email, password });

  await connect();

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    

    return new NextResponse("User is registered", { status: 200 });
  } catch (err:any) {
    console.error("Error saving user:", err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};
