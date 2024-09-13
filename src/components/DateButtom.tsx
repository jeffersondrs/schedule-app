import React, { useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import dayjs, { Dayjs } from 'dayjs';
import CalendarUi from "./CalendarUi";
import { IoClose } from "react-icons/io5";

type DateButtonProps = {
  date: string;
  setDate: (date: string) => void;
};

export default function DateButton({ date, setDate }: DateButtonProps) {
  const [inputDate, setInputDate] = useState(date);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());


  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const formatDate = (date: Dayjs) => {
    return date.format('DD/MM/YYYY');
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate) {
      setSelectedDate(newDate);
      setInputDate(formatDate(newDate));
      setShowCalendar(false);
      setDate(formatDate(newDate));
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex flex-row justify-center items-center border bg-primary border-gray-primary rounded-md gap-2 px-3 w-full">
        <BsCalendarDateFill className="w-5 h-5 text-purple-800" />
        <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
        <div className="flex flex-row justify-center items-center w-full">
          <input
            type="button"
            className="w-full h-12 text-xs font-normal text-gray-300 focus:outline-none text-start"
            value={inputDate}
            onClick={toggleCalendar}
          />
          <FaAngleDown className="w-5 h-5 text-gray-300 cursor-pointer" onClick={toggleCalendar} />
        </div>
      </div>

      {showCalendar && (
        <div className="bg-primary transition-all duration-300 ease-in-out z-30 fixed px-6 pt-20 top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
          <button onClick={toggleCalendar} className="text-white text-right w-5 h-5 absolute top-3 right-3">
            <IoClose className="w-5 h-5 text-white" />
          </button>
          <CalendarUi selectedDate={selectedDate} handleDateChange={handleDateChange} />
        </div>
      )}

    </div>
  );
}
