import {
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from 'lucide-react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSession } from 'next-auth/react';
import { logout } from '@/action/login';

export function DropDownMenu() {
  const { data: session } = useSession();

  const handleLogout = () => async () => {
    logout();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={session?.user?.image || '/avatar/avatar.jpeg'}
          alt="avatar"
          width={100}
          height={100}
          className="rounded-full w-7 h-7 object-cover cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-translate-x-7 bg-primary">
        <DropdownMenuLabel className="text-zinc-100">
          Minha conta
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-zinc-50">
            <User />
            <span>Perfil</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-zinc-50">
            <CreditCard />
            <span>Pagamento</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-zinc-50">
            <Settings />
            <span>Configurações</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-zinc-50">
          <Github />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-zinc-50">
          <LifeBuoy />
          <span>Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-zinc-50" onClick={handleLogout()}>
          <LogOut />
          <span>Sair</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
