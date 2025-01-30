"use server";

import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcrypt";

type SignupProps = {
  username: string;
  password: string;
};

export async function signup(props: SignupProps) {
  const { username, password } = props;

  if (!username || !password) {
    return { success: false, message: "All fields are required" };
  }

  await connectDB();

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return { success: false, message: "Username already in use" };
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return { success: true, message: "User created successfully" };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Internal server error",
    };
  }
}
