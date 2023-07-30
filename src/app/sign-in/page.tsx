import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/sign-in/sign-in.styles.module.scss';
import githubSvg from '@/assets/github.svg';
import googleSvg from '@/assets/google.svg';
import { Button } from '@/components/button/button';
import { Footer } from '@/components/footer/footer';
import { Heading } from '@/components/heading/heading';
import { TextInput } from '@/components/text-input/text-input';
import { Text } from '@/components/text/text';

import { Lock, Mail } from 'lucide-react';

const SignIn: NextPage = () => (
  <>
    <main className={styles.main}>
      <div className={styles.head}>
        <Heading asChild size="lg">
          <h1>Meu orçamento</h1>
        </Heading>
        <Heading asChild>
          <h2>Faça login para entrar na plataforma</h2>
        </Heading>
      </div>
      <form>
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
        <div className={styles.actions}>
          <Button type="submit">Entrar</Button>
          <div>
            <Text asChild>
              <Link href="">Esqueci minha senha</Link>
            </Text>
            <Text asChild>
              <Link href="/sign-up">Criar uma conta</Link>
            </Text>
            <Text>ou</Text>
            <div>
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
    </main>
    <Footer />
  </>
);

export default SignIn;
