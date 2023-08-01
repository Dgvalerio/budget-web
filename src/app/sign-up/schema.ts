import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().nonempty({ message: 'Você deve informar um nome' }),
    email: z
      .string()
      .email('Esse e-mail é inválido')
      .nonempty('Você deve informar um e-mail'),
    password: z
      .string()
      .min(8, 'Sua senha deve conter no mínimo 8 caractéres')
      .nonempty('Você deve informar uma senha'),
    passwordConfirmation: z
      .string()
      .min(8, 'Sua senha deve conter no mínimo 8 caractéres')
      .nonempty('Você deve informar uma confirmação de senha'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'A senha e a confirmação de senha devem ser iguais',
    path: ['passwordConfirmation'],
  });
