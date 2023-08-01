import { NextPage } from 'next';

import { SignUpForm } from '@/app/sign-up/components/form';
import styles from '@/app/sign-up/sign-up.styles.module.scss';
import { Footer } from '@/components/footer/footer';
import { Heading } from '@/components/heading/heading';

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
      <SignUpForm />
    </main>
    <Footer />
  </>
);

export default SignUp;
