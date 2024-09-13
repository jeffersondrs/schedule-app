import React from "react";
import { BsTelephoneFill } from "react-icons/bs";

interface InputPhoneProps {
  phone: string;
  setPhone: (phone: string) => void;
}

export default function InputPhone({ phone, setPhone }: InputPhoneProps) {

  return (
    <>
      <label htmlFor="phone" className="text-sm font-bold text-gray-200">
        Phone
      </label>
      <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md px-2">
        <BsTelephoneFill className="w-5 h-5 text-purple-700" />
        <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(00) 00000-0000"
          value={phone}
          className="w-full h-full bg-primary text-gray-200 p-2 rounded-md focus:outline-none"
        />
      </div>
    </>
  );
}