"use client";

import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { hours } from "@/utils/constants";

interface TimeButtonProps {
  time: string;
  setTime: (time: string) => void;
}

export default function BasicTimePicker({ time, setTime }: TimeButtonProps) {
  const [isOpened, setIsOpened] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleIsOpened = () => {
    setIsOpened((prev) => !prev);
  };

  const handleTime = (time: string) => {
    setTime(time);
    handleIsOpened();
  };

  return (
    <div className="relative w-full flex flex-row items-center justify-center">
      <div className="flex flex-row justify-between items-center w-full">
        <button ref={buttonRef} className="w-full h-10 bg-primary text-gray-300 rounded-md text-start text-xs"
          onClick={handleIsOpened}>
          {time}
        </button>
        <FaAngleDown className={`w-5 h-5 text-gray-300 cursor-pointer transition-transform ${isOpened ? 'rotate-180' : 'rotate-0'}`} onClick={handleIsOpened} />
      </div>

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 right-0 w-60 bg-primary rounded-md shadow-lg grid grid-cols-3 gap-1 border border-gray-primary p-2"
          >
            {hours.map((hour, index) => (
              <button key={index} className="p-2 hover:bg-secondary rounded-md cursor-pointer text-gray-100 text-center text-xs" onClick={() => handleTime(hour)}>
                {hour}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
