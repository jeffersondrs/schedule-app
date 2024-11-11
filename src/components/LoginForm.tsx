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

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Entrar</CardTitle>
        <CardDescription className="text-sm">
          Entre com seu e-mail e senha para acessar sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
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
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="text-xs">
                Senha
              </Label>
              <Link href="#" className="ml-auto inline-block underline text-xs">
                Esqueceu a senha?
              </Link>
            </div>
            <InputPassword
              id="password"
              placeholder="Senha"
              required
              className="text-xs"
            />
          </div>
          <Button type="submit" className="w-full text-xs">
            Entrar
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
          Não tem uma conta?{' '}
          <Link href="/auth/signup" className="underline">
            Registrar-se
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
