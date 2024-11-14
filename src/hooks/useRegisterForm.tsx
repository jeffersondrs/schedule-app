import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/registerSchema';
import { registerUser } from '@/action/register';
import { toast } from 'react-toastify';

export function useRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<typeof registerSchema._input> = async (
    data,
  ) => {
    try {
      const result = await registerUser(data);

      if (result.error) {
        setError('email', { type: 'server', message: result.error });
        return;
      }

      toast.success('Registrado com sucesso, por favor, faça login!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setError('email', {
        type: 'server',
        message:
          'Alguma coisa deu errado. Por favor, tente novamente mais tarde.',
      });

      toast.error(
        'Alguma coisa deu errado. Por favor, tente novamente mais tarde.',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );

      console.error(error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
