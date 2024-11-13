import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { DropDownMenu } from './DropDownMenu';

export default function ProtectedNavigation() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-1">
          <p className="text-xs font-normal text-gray-300">
            Faça login para acessar sua conta.
          </p>
          <Link href="/auth/signin">
            <p className="text-xs font-bold text-[#9282FA] cursor-pointer">
              Login
            </p>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div
      className="
        flex flex-row justify-center items-center gap-2"
    >
      <p className="text-xs font-normal text-gray-300">
        Bem vindo, <span className="font-bold">{session.user?.name}</span>!
      </p>
      <DropDownMenu />
    </div>
  );
}
