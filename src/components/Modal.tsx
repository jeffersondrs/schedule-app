import React from "react";
import { IoClose } from "react-icons/io5";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  isClose: () => void;
};

export default function Modal({ children, isOpen, isClose }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed px-6 pt-20 pb-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-auto">
          <div className="bg-primary pt-12 pb-5 rounded-md w-full relative px-5 md:max-w-lg">
            <button onClick={isClose} className="text-white text-right w-5 h-5 absolute top-3 right-3">
              <IoClose className="w-5 h-5 text-white" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

