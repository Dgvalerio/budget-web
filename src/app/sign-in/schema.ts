import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .email('Esse e-mail é inválido')
    .nonempty('Você deve informar um e-mail'),
  password: z
    .string()
    .min(8, 'Sua senha deve conter no mínimo 8 caractéres')
    .nonempty('Você deve informar uma senha'),
});
