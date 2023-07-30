import { NextPage } from 'next';
import Link from 'next/link';

import styles from '@/app/sign-up/sign-up.styles.module.scss';
import { Button } from '@/components/button/button';
import { Footer } from '@/components/footer/footer';
import { Heading } from '@/components/heading/heading';
import { TextInput } from '@/components/text-input/text-input';
import { Text } from '@/components/text/text';

import { Lock, Mail, User } from 'lucide-react';

const SignUp: NextPage = () => (
  <>
    <main className={styles.main}>
      <div className={styles.head}>
        <Heading asChild size="lg">
          <h1>Meu orçamento</h1>
        </Heading>
        <Heading asChild>
          <h2>Faça cadastro para entrar na plataforma</h2>
        </Heading>
      </div>
      <form>
        <label htmlFor="name">
          <Text>Nome</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="email">
          <Text>E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Mail />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password">
          <Text>Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="passwordConfirmation">
          <Text>Confirmação de senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="passwordConfirmation"
              type="password"
              placeholder="Digite sua senha novamente"
            />
          </TextInput.Root>
        </label>

        <div className={styles.actions}>
          <Button variant="secondary" asChild type="button">
            <Link href="/sign-in">Voltar</Link>
          </Button>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </main>
    <Footer />
  </>
);

export default SignUp;
