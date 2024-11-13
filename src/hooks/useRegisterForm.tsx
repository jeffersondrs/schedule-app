import { useState } from 'react';
import { registerSchema } from '@/schemas/registerSchema';
import { z } from 'zod';

export function useRegisterForm() {
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange =
    (field: keyof typeof userRegister) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserRegister((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validateForm = () => {
    try {
      registerSchema.parse(userRegister);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  return {
    userRegister,
    handleChange,
    validateForm,
    errors,
    loading,
    setLoading,
  };
}
