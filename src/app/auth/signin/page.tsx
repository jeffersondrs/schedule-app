'use client';

import { LoginForm } from '@/components';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function SignInPage() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [router, session]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-950">
      <LoginForm />
    </div>
  );
}
