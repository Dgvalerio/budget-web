import { NextPage } from 'next';

import { SignInForm } from '@/app/sign-in/components/form';
import { Footer } from '@/components/footer/footer';
import { Heading } from '@/components/heading/heading';

const SignIn: NextPage = () => (
  <>
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="mt-8 flex w-96 flex-col gap-1 text-center">
        <Heading asChild size="lg">
          <h1>Meu orçamento</h1>
        </Heading>
        <Heading asChild>
          <h2 className="text-gray-600">
            Faça login para entrar na plataforma
          </h2>
        </Heading>
      </div>
      <SignInForm />
    </main>
    <Footer />
  </>
);

export default SignIn;
