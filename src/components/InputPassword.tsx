import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import { Input } from './ui/input';
import { UseFormRegister } from 'react-hook-form'; // Importar os tipos necessários

interface InputPasswordProps {
  id: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  onChangePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register: UseFormRegister<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  name: 'name' | 'email' | 'password' | 'confirmPassword';
}

export default function InputPassword({
  id,
  placeholder,
  required,
  className,
  value,
  register,
  name,
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        required={required}
        className={className}
        value={value}
        {...register(name)}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-2"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}
