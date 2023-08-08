'use client';

import React, { FC, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';

import { signUpSchema } from '@/app/sign-up/schema';
import { Button } from '@/components/button/button';
import { Loading } from '@/components/loading/loading';
import { TextInput } from '@/components/text-input/text-input';
import { Text } from '@/components/text/text';
import { api } from '@/config/api';
import { routes } from '@/lib/routes';
import { UserTypes } from '@/types/user';

import { AxiosError } from 'axios';
import { Lock, Mail, User } from 'lucide-react';
import { z } from 'zod';

type SignUp = z.infer<typeof signUpSchema>;

export const SignUpForm: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<SignUp>({ resolver: zodResolver(signUpSchema) });

  const {
    formState: { errors },
  } = form;

  const handleSubmit: SubmitHandler<SignUp> = async (data) => {
    try {
      setLoading(true);

      await api.post<UserTypes.Dto>('/user', data);

      router.push(routes.signIn);
    } catch (e) {
      if ((e as AxiosError).response?.data) {
        const data = (e as AxiosError).response?.data as { message: string };

        form.setError('email', { message: data.message });
      } else {
        console.warn({ e });
      }

      setLoading(false);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex w-96 flex-col justify-stretch gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <label className="flex flex-col gap-1" htmlFor="name">
          <Text>Nome</Text>
          <TextInput.Root error={!!errors['name']}>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input
              name="name"
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </TextInput.Root>
          <TextInput.Error error={errors['name']} />
        </label>
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
          <TextInput.Error error={errors['email']} />
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
          <TextInput.Error error={errors['password']} />
        </label>
        <label className="flex flex-col gap-1" htmlFor="passwordConfirmation">
          <Text>Confirmação de senha</Text>
          <TextInput.Root error={!!errors['passwordConfirmation']}>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              name="passwordConfirmation"
              type="password"
              placeholder="Digite sua senha novamente"
              required
            />
          </TextInput.Root>
          <TextInput.Error error={errors['passwordConfirmation']} />
        </label>
        <div className="mb-8 mt-4 flex justify-between">
          <Button variant="secondary" asChild type="button" disabled={loading}>
            <Link href="/sign-in">Voltar</Link>
          </Button>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
      {loading && <Loading />}
    </FormProvider>
  );
};
