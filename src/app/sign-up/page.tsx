import { NextPage } from 'next';

import { SignUpForm } from '@/app/sign-up/components/form';
import { Footer } from '@/components/footer/footer';
import { Heading } from '@/components/heading/heading';

const SignUp: NextPage = () => (
  <>
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="mt-8 flex w-96 flex-col gap-1 text-center">
        <Heading asChild size="lg">
          <h1>Meu orçamento</h1>
        </Heading>
        <Heading asChild>
          <h2 className="text-gray-600">
            Faça cadastro para entrar na plataforma
          </h2>
        </Heading>
      </div>
      <SignUpForm />
    </main>
    <Footer />
  </>
);

export default SignUp;
