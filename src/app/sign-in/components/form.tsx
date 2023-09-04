'use client';

import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';

import { signInSchema } from '@/app/sign-in/schema';
import githubSvg from '@/assets/github.svg';
import googleSvg from '@/assets/google.svg';
import { Button } from '@/components/button/button';
import { Form } from '@/components/form/form';
import { Loading } from '@/components/loading/loading';
import { Text } from '@/components/text/text';
import { api } from '@/config/api';
import { routes } from '@/lib/routes';
import { AuthTypes } from '@/types/auth';

import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { Lock, Mail } from 'lucide-react';
import { z } from 'zod';

type SignIn = z.infer<typeof signInSchema>;

export const SignInForm: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<SignIn>({ resolver: zodResolver(signInSchema) });

  const handleSubmit: SubmitHandler<SignIn> = async (data) => {
    try {
      setLoading(true);

      const response = await api.post<AuthTypes.Dto>('/auth/sign-in', data);

      Cookies.set('token', response.data.token, { expires: 1 });

      router.push(routes.home);
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
    <Form.Root<SignIn> submitHandler={handleSubmit} {...form}>
      <Form.Field<SignIn>
        name="email"
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
        icon={<Mail />}
      />
      <Form.Field<SignIn>
        name="password"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        icon={<Lock />}
      />
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
              <Image height={24} width={24} src={githubSvg} alt="GitHub Logo" />
            </Button>
            <Button variant="icon">
              <Image height={24} width={24} src={googleSvg} alt="Google Logo" />
            </Button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </Form.Root>
  );
};
