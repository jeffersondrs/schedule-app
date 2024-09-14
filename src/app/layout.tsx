import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './globals.css';
import { StoreProvider } from '@/store/storeContext';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Schedule-App",
  description: "A simple schedule app",
};

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
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
