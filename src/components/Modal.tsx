'use client';

import React from 'react';
import { IoClose } from 'react-icons/io5';

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  isClose: () => void;
};

export default function Modal({ children, isOpen, isClose }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-40 flex justify-center items-center overflow-hidden backdrop-blur-sm">
          <div className="bg-primary rounded-md relative md:max-w-lg">
            <button
              onClick={isClose}
              className="text-white text-right w-5 h-5 absolute top-3 right-3"
              title="Close"
              type="button"
            >
              <IoClose className="w-5 h-5 text-white" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
