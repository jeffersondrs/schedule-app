import React from "react";
import {
  BsPlus
} from "react-icons/bs";

interface ButtonProps {
  title?: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="bg-purple-700 hover:bg-purple-900 text-gray-950 hover:text-gray-50 transform
      transition-all duration-300 ease-in-out
      shadow-md shadow-purple-400/20 font-bold py-2 px-4 rounded-lg"
      onClick={onClick}
    >{title ? title : <BsPlus className="w-5 h-5" />}
    </button>
  );
}