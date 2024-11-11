import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
import { Input } from './ui/input';

export default function InputPassword(props: {
  id: string;
  placeholder: string;
  required?: boolean;
  className?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        id={props.id}
        type={showPassword ? 'text' : 'password'}
        placeholder={props.placeholder}
        required={props.required}
        className={props.className}
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
