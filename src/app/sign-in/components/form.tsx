'use client';

import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';

import { signInSchema } from '@/app/sign-in/schema';
import githubSvg from '@/assets/github.svg';
import googleSvg from '@/assets/google.svg';
import { Button } from '@/components/button/button';
import { TextInput } from '@/components/text-input/text-input';
import { Text } from '@/components/text/text';

import { Lock, Mail } from 'lucide-react';
import { z } from 'zod';

type SignIn = z.infer<typeof signInSchema>;

export const SignInForm: FC = () => {
  const form = useForm<SignIn>({ resolver: zodResolver(signInSchema) });

  const {
    formState: { errors },
  } = form;

  const handleSubmit: SubmitHandler<SignIn> = (data) => {
    console.log({ data });
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex w-96 flex-col justify-stretch gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <label className="flex flex-col gap-1" htmlFor="email">
          <Text>E-mail</Text>
          <TextInput.Root error={!!errors['email']}>
            <TextInput.Icon>
              <Mail />
            </TextInput.Icon>
            <TextInput.Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
          </TextInput.Root>
        </label>
        <label className="flex flex-col gap-1" htmlFor="password">
          <Text>Senha</Text>
          <TextInput.Root error={!!errors['password']}>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />
          </TextInput.Root>
        </label>
        <div className="mb-8 mt-4 flex flex-col justify-stretch gap-8">
          <Button type="submit">Entrar</Button>
          <div className="flex flex-col items-center gap-2">
            <Text className="text-gray-600 underline" asChild>
              <Link href="">Esqueci minha senha</Link>
            </Text>
            <Text className="text-gray-600 underline" asChild>
              <Link href="/sign-up">Criar uma conta</Link>
            </Text>
            <Text>ou</Text>
            <div className="flex gap-2">
              <Button variant="icon">
                <Image
                  height={24}
                  width={24}
                  src={githubSvg}
                  alt="Google Logo"
                />
              </Button>
              <Button variant="icon">
                <Image
                  height={24}
                  width={24}
                  src={googleSvg}
                  alt="Google Logo"
                />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};