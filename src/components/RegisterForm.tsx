'use client';
import Link from 'next/link';
import React, { useState } from 'react';
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
import { InputPassword } from '@/components';
import { register } from '@/action/register';

export default function Register() {
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">Registro</CardTitle>
        <CardDescription className="text-sm">
          Crie sua conta para acessar o sistema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            await register(userRegister);
          }}
        >
          <div className="grid gap-1">
            <Label htmlFor="name" className="text-xs">
              Nome
            </Label>
            <Input
              id="name"
              type="text"
              required
              className="text-xs"
              onChange={(e) =>
                setUserRegister({ ...userRegister, name: e.target.value })
              }
            />
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
              onChange={(e) =>
                setUserRegister({ ...userRegister, email: e.target.value })
              }
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
              onChange={(e) =>
                setUserRegister({ ...userRegister, password: e.target.value })
              }
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
        </form>
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
