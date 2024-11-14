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
import InputPassword from '@/components/InputPassword';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import { ToastContainer } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';

export default function Register() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useRegisterForm();

  return (
    <Card className="mx-auto max-w-md w-full">
      <ToastContainer />
      <CardHeader>
        <CardTitle className="text-lg">Registro</CardTitle>
        <CardDescription className="text-sm">
          Crie sua conta para acessar o sistema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4"
          onSubmit={handleSubmit(onSubmit)} // Use handleSubmit do React Hook Form
        >
          <div className="grid gap-1">
            <Label htmlFor="name" className="text-xs">
              Nome
            </Label>
            <Input
              id="name"
              placeholder="Seu nome"
              {...register('name')}
              className="text-xs"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="email" className="text-xs">
              E-mail
            </Label>
            <Input
              id="email"
              placeholder="m@examplo.com"
              {...register('email')}
              className="text-xs"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="password" className="text-xs">
              Senha
            </Label>
            <InputPassword
              id="confirmPassword"
              placeholder="Confirme sua senha"
              className="text-xs"
              register={register}
              name="password"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="grid gap-1">
            <Label htmlFor="confirmPassword" className="text-xs">
              Confirmar Senha
            </Label>
            <InputPassword
              id="confirmPassword"
              placeholder="Confirme sua senha"
              className="text-xs"
              register={register}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-xs"
          >
            {isSubmitting ? (
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
