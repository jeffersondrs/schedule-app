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

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Login</CardTitle>
        <CardDescription className="text-sm">
          Entre com seu email e senha para acessar sua conta.
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
            <Input id="password" type="password" required className="text-xs" />
          </div>
          <Button type="submit" className="w-full text-xs">
            Login
          </Button>
          <Button variant="outline" className="w-full text-xs">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-xs">
          Don&apos;t have an account?{' '}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
