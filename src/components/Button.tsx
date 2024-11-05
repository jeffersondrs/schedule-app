import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { ButtonProps } from '@/utils/types';

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="bg-[#292445] hover:bg-[#3a3364]/90 text-gray-100 hover:text-gray-50 transform
      transition-all duration-300 ease-in-out text-xs
      hover:shadow-sm hover:shadow-purple-400/20 font-mono py-2 px-4 rounded-md"
      onClick={onClick}
      type="button"
      title={title}
    >
      {title ? title : <BsPlus className="w-5 h-5" />}
    </button>
  );
}
