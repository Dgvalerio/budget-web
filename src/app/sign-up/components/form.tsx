'use client';

import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';

import { signUpSchema } from '@/app/sign-up/schema';
import { Button } from '@/components/button/button';
import { Form } from '@/components/form/form';
import { Loading } from '@/components/loading/loading';
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
    <Form.Root<SignUp> submitHandler={handleSubmit} {...form}>
      <Form.Field<SignUp>
        name="name"
        label="Nome"
        placeholder="Digite seu nome"
        icon={<User />}
      />
      <Form.Field<SignUp>
        name="email"
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
        icon={<Mail />}
      />
      <Form.Field<SignUp>
        name="password"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        icon={<Lock />}
      />
      <Form.Field<SignUp>
        name="passwordConfirmation"
        label="Confirmação de senha"
        type="password"
        placeholder="Digite sua senha novamente"
        icon={<Lock />}
      />
      <div className="mb-8 mt-4 flex justify-between">
        <Button variant="secondary" asChild type="button" disabled={loading}>
          <Link href="/sign-in">Voltar</Link>
        </Button>
        <Button type="submit">Cadastrar</Button>
      </div>
      {loading && <Loading />}
    </Form.Root>
  );
};
