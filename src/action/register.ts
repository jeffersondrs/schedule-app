'use server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

interface UserInformations {
  email: string;
  password: string;
  name: string;
}

export const register = async (values: UserInformations) => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: 'Email already exists!',
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return {
      user: {
        id: savedUser._id.toString(),
        name: savedUser.name,
        email: savedUser.email,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      error: 'Something went wrong during registration.',
    };
  }
};
