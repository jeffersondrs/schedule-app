import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
// import Facebook from 'next-auth/providers/facebook';
// import Twitter from 'next-auth/providers/twitter';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),

    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select('+password');
        if (!user) throw new Error('Wrong Email');
        const passwordMatch = await bcrypt.compare(
          credentials!.password as string,
          user.password,
        );
        if (!passwordMatch) throw new Error('Wrong Password');
        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    signIn: async ({ 
       account }) => {
      if (account?.provider === 'credentials') {
        return true;
      }

      if (account?.provider === 'google') {
        try {
          // const { email, name, image, id } = user;
          // console.log('email', email);
          // console.log('name', name);
          // console.log('image', image)
          // console.log('id', id)

          return true;
        } catch (error) {
          console.log(error);
        }
      }

      return false;
    },
  },
});
