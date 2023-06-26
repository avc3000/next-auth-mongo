import { NextResponse } from 'next/server';
import User from '../../../../models/user';
import { connectDB } from '../../../../libs/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const { fullName, email, password } = await request.json();
  console.log(fullName, email, password);

  if (!password || password.length < 6)
    return NextResponse.json({ message: 'Password must be at least 6 characters'}, { status: 400 });

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, fullName, password: hashedPassword });
    const savedUser = await user.save();
    console.log(savedUser);

    return NextResponse.json(savedUser);
  } catch (error) {
    console.log(error);
    
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }
}