import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaGoogle } from 'react-icons/fa';
import { login } from '@/action/login';
import { InputPassword } from '@/components';

export default function Register() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Registro</CardTitle>
        <CardDescription className="text-sm">
          Crie sua conta para acessar o sistema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="name" className="text-xs">
              Nome
            </Label>
            <Input id="name" type="text" required className="text-xs" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email" className="text-xs">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@examplo.com"
              required
              className="text-xs"
            />
          </div>
          <div className="grid gap-1">
            <div className="flex items-center">
              <Label htmlFor="password" className="text-xs">
                Senha
              </Label>
            </div>
            <InputPassword
              id="password"
              placeholder="Senha"
              required
              className="text-xs"
            />
          </div>
          <div className="grid gap-1">
            <div className="flex items-center">
              <Label htmlFor="password" className="text-xs">
                Confirmar Senha
              </Label>
            </div>
            <InputPassword
              id="password"
              placeholder="Confirmar Senha"
              required
              className="text-xs"
            />
          </div>
          <Button type="submit" className="w-full text-xs">
            Registrar
          </Button>
          <form
            className="flex items-center"
            onSubmit={(e) => {
              e.preventDefault();
              login('google');
            }}
          >
            <Button variant="outline" className="w-full text-xs">
              <FaGoogle className="mr-2" />
              Entrar com Google
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-xs">
          Já possui uma conta?{' '}
          <Link href="/auth/signin" className="underline">
            Entrar
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
