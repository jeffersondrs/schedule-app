'use server';
import { signIn, signOut } from '@/lib/auth';

const register = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error('Invalid email or password');
  }
};

const login = async (provider: string) => {
  await signIn(provider, { redirectTo: '/' });
};

const logout = async () => {
  await signOut({ redirect: false });
};

export { register, login, logout };
