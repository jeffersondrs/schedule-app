import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { ToggleIconProps } from "@/utils/types";

const ToggleIcon = ({ isOpen, onClick }: ToggleIconProps) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`cursor-pointer p-2 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
  >
    <FaAngleDown className="w-5 h-5 text-gray-300" />
  </button>
);

export default ToggleIcon;