'use client';
import Link from 'next/link';
import React from 'react';
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
import InputPassword from '@/components/InputPassword'; // Importando o InputPassword
import { useRegisterForm } from '@/hooks/useRegisterForm'; // Hook para validação e estado
import { toast, ToastContainer } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import { register } from '@/action/register';

export default function Register() {
  const {
    userRegister,
    handleChange,
    validateForm,
    errors,
    loading,
    setLoading,
  } = useRegisterForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const result = await register(userRegister);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Usuário registrado com sucesso!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <ToastContainer />
      <CardHeader>
        <CardTitle className="text-lg">Registro</CardTitle>
        <CardDescription className="text-sm">
          Crie sua conta para acessar o sistema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <Label htmlFor="name" className="text-xs">
              Nome
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={userRegister.name}
              onChange={handleChange('name')}
              className="text-xs"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="email" className="text-xs">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@examplo.com"
              value={userRegister.email}
              onChange={handleChange('email')}
              className="text-xs"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="password" className="text-xs">
              Senha
            </Label>
            <InputPassword
              id="password"
              placeholder="Digite sua senha"
              value={userRegister.password}
              onChange={handleChange('password')}
              className="text-xs"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="confirmPassword" className="text-xs">
              Confirmar Senha
            </Label>
            <InputPassword
              id="confirmPassword"
              placeholder="Confirme sua senha"
              value={userRegister.confirmPassword}
              onChange={handleChange('confirmPassword')}
              className="text-xs"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <Button type="submit" disabled={loading} className="w-full text-xs">
            {loading ? (
              <FaSpinner className="animate-spin w-4 h-4 mr-2" />
            ) : (
              'Registrar'
            )}
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
