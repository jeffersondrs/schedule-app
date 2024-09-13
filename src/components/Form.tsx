import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { ScheduleProps } from "../utils/types";
import DateButton from "./DateButtom";
import BasicTimePicker from "./TimeButton";
import { IoMdClock } from "react-icons/io";
import InputPhone from "./InputPhone";
import { formatPhoneNumber } from "@/utils/functions";

interface FormProps {
  onSubmit: (data: ScheduleProps) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id: "", userSchedule: name, phoneScheduleUser: phone, scheduleDescription: service, scheduleTime:
      scheduleTime, dateSchedule: scheduleDate });
  };

  const handleChange = (phone: string) => {
    setPhone(formatPhoneNumber(phone));
  };

  console.log(phone, name, service, scheduleTime, scheduleDate);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 w-full">
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-2xl font-bold text-gray-200">Schedule your appointment</h1>
        <p className="text-sm font-normal text-gray-300">Fill in the fields below to schedule your appointment.</p>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="phone" className="text-sm font-bold text-gray-200">
          Name
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md px-2">
          <IoPerson className="w-5 h-5 text-purple-700" />
          <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-full bg-primary text-gray-200 p-2 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <InputPhone phone={phone} setPhone={handleChange} />
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">

        <label htmlFor="service" className="text-sm font-bold text-gray-200">
          Description
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md p-2">
          <textarea
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full h-24 bg-primary text-gray-200 rounded-md resize-none focus:outline-none"
            rows={4}

          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="scheduleTime" className="text-sm font-bold text-gray-200">
          Date
        </label>
        <div className="w-full">
          <DateButton date={scheduleDate} setDate={(date) => setScheduleDate(date)} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="scheduleDate" className="text-sm font-bold text-gray-200">
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md px-3 gap-2">
          <IoMdClock className="w-5 h-5 text-purple-700" />
          <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
          <BasicTimePicker time={scheduleTime} setTime={(time) => setScheduleTime(time)} />
        </div>
      </div>
      <div className="flex flex-row justify-end items-center w-full">
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-900 text-gray-950 hover:text-gray-50 transform
        transition-all duration-300 ease-in-out z-10
        shadow-md shadow-purple-400/20 font-bold py-2 px-4 rounded-lg"
        >
          Agendar
        </button>
      </div>
    </form>
  );
}