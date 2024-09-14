'use client';

import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { ScheduleProps } from "../utils/types";
import DateButton from "./DateButtom";
import BasicTimePicker from "./TimeButton";
import { IoMdClock } from "react-icons/io";
import InputPhone from "./InputPhone";
import { formatPhoneNumber } from "@/utils/functions";
import dayjs from "dayjs";

interface FormProps {
  onSubmit: (data: ScheduleProps) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [scheduleDescription, setScheduleDescription] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const today = dayjs().format("YYYY-MM-DD");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: "", userSchedule: name, phoneScheduleUser: phone, scheduleDescription: scheduleDescription, scheduleTime:
        scheduleTime, dateSchedule: scheduleDate, createdAt: today, updatedAt: today
    });
  };

  const handleChange = (phone: string) => {
    setPhone(formatPhoneNumber(phone));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 w-full z-50">
      <div className="flex flex-col justify-center items-start w-full gap-2">
        <h1 className="text-2xl font-bold text-gray-200">Schedule your appointment</h1>
        <p className="text-xs font-normal text-texting">Please fill in the customer details to schedule the appointment. Ensure you include all necessary information to guarantee efficient and personalized service.</p>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="phone" className="text-xs font-bold text-gray-200">
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
            className="w-full h-full bg-primary text-xs text-gray-200 p-2 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <InputPhone phone={phone} setPhone={handleChange} />
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">

        <label htmlFor="service" className="text-xs font-bold text-gray-200">
          Description
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md p-2">
          <textarea
            id="service"
            value={scheduleDescription}
            onChange={(e) => setScheduleDescription(e.target.value)}
            className="w-full h-24 bg-primary text-gray-200 rounded-md resize-none focus:outline-none"
            rows={4}

          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="scheduleTime" className="text-xs font-bold text-gray-200">
          Date
        </label>
        <div className="w-full">
          <DateButton date={scheduleDate} setDate={(date) => setScheduleDate(date)} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="scheduleDate" className="text-xs font-bold text-gray-200">
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
        transition-all duration-300 ease-in-out z-10 text-sm
        shadow-md shadow-purple-400/20 font-bold py-2 px-4 rounded-lg"
        >
          Agendar
        </button>
      </div>
    </form>
  );
}