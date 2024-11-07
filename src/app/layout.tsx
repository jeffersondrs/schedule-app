import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/store/storeContext';
import dynamic from 'next/dynamic';
import { SessionProvider } from 'next-auth/react';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Schedule-App',
  description: 'A simple schedule app',
};

const DynamicContextProvider = dynamic(
  () => import('@/store/storeContext').then((mod) => mod.StoreProvider),
  {
    ssr: false,
  },
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.className}
          antialiased`}
      >
        <StoreProvider>
          <DynamicContextProvider>
            <SessionProvider>{children}</SessionProvider>
          </DynamicContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
