import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

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
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = credentials.username as string | undefined;
        const password = credentials.password as string | undefined;
        if (!email || !password) {
          throw new CredentialsSignin('Missing credentials');
        }
        return { id: '1', name: 'User' };
      },
    }),
  ],

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

    signIn: async ({ user, account }) => {
      if (account?.provider === 'credentials') {
        return true;
      }

      if (account?.provider === 'google') {
        try {
          const { email, name } = user;
          console.log('email', email);
          console.log('name', name);
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
