'use server';
import { signIn } from '@/auth';

const register = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error('Invalid email or password');
  }

  console.log('Registering user with email:', email);
  console.log('Registering user with password:', password);
};

const login = async (provider: string) => {
  await signIn(provider);
};

export { register, login };
