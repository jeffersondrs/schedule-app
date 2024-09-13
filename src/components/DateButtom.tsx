import React, { useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import dayjs, { Dayjs } from 'dayjs';
import CalendarUi from "./CalendarUi";

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
      <div className="relative flex flex-row justify-center items-center border bg-gray-950 border-gray-500 rounded-md gap-2 px-3 w-full">
        <BsCalendarDateFill className="w-5 h-5 text-purple-800" />
        <input
          type="button"
          className="w-full h-12 text-sm font-normal text-gray-300 focus:outline-none"
          value={inputDate}
          onClick={toggleCalendar}
        />
        <FaAngleDown className="w-5 h-5 text-gray-300 cursor-pointer" onClick={toggleCalendar} />
      </div>

      {showCalendar && (
        <div className="absolute top-14 left-0 bg-white transition-all duration-300 ease-in-out">
          <CalendarUi selectedDate={selectedDate} handleDateChange={handleDateChange} />
        </div>
      )}

    </div>
  );
}
