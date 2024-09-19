import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';

interface InputPhoneProps {
  phone: string;
  handlePhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPhone({ phone, handlePhoneChange }: InputPhoneProps) {
  return (
    <>
      <label htmlFor="phone" className="text-xs font-bold text-gray-200">
        Phone
      </label>
      <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-r-md pl-2">
        <BsTelephoneFill className="w-5 h-5 text-purple-700" />
        <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
          placeholder="(00) 00000-0000"
          className="w-full h-full bg-primary text-gray-200 p-2 rounded-r-md focus:bg-gray-700 text-xs"

        />
      </div>
    </>
  );
}
