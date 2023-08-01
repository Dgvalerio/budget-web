'use client';

import React, { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';

import { signUpSchema } from '@/app/sign-up/schema';
import styles from '@/app/sign-up/sign-up.styles.module.scss';
import { Button } from '@/components/button/button';
import { TextInput } from '@/components/text-input/text-input';
import { Text } from '@/components/text/text';

import { Lock, Mail, User } from 'lucide-react';
import { z } from 'zod';

type SignUp = z.infer<typeof signUpSchema>;

export const SignUpForm: FC = () => {
  const form = useForm<SignUp>({ resolver: zodResolver(signUpSchema) });

  const {
    formState: { errors },
  } = form;

  // const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
  const handleSubmit: SubmitHandler<SignUp> = (data) => {
    console.log({ data });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <label htmlFor="name">
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
        <label htmlFor="email">
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
        <label htmlFor="password">
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
        <label htmlFor="passwordConfirmation">
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
        <div className={styles.actions}>
          <Button variant="secondary" asChild type="button">
            <Link href="/sign-in">Voltar</Link>
          </Button>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </FormProvider>
  );
};
