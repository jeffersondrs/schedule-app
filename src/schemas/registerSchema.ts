import { z } from 'zod';

const registerSchema = z
  .object({
    name: z.string().min(1, { message: 'Nome é obrigatório.' }),
    email: z.string().email({ message: 'Formato de e-mail inválido.' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'As senhas não coincidem.',
      });
    }
  });

export { registerSchema };
