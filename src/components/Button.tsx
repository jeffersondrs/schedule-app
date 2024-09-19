import React from 'react';
import { BsPlus } from 'react-icons/bs';

interface ButtonProps {
  title?: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="bg-[#9282FA] hover:bg-[#9282FA]/90 text-gray-100 hover:text-gray-50 transform
      transition-all duration-300 ease-in-out text-sm
      shadow-md shadow-purple-400/20 font-bold py-2 px-4 rounded-lg"
      onClick={onClick}
      type="button"
      title={title}
    >
      {title ? title : <BsPlus className="w-5 h-5" />}
    </button>
  );
}
