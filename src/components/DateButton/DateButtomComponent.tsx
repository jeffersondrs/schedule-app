"use client";

import React, { useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import dayjs, { Dayjs } from 'dayjs';
import DateDisplayButton from "./DateDisplayButton";
import ToggleIcon from "./ToggleIcon";
import CalendarModal from "./CalendarModal";
import { DateButtonProps } from "@/utils/types";

export default function DateButtonComponent({ setDate }: DateButtonProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleDateChange = (newDate: Dayjs) => {
    setSelectedDate(newDate);
    setDate(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative flex flex-row justify-center items-center border bg-primary border-gray-primary rounded-md w-full">
        <div className="p-2">
          <BsCalendarDateFill className="w-5 h-5 text-purple-800" />
        </div>
        <span className="w-[1px] h-5 bg-gray-primary mr-2"></span>
        <DateDisplayButton selectedDate={selectedDate} onClick={toggleCalendar} />
        <ToggleIcon isOpen={showCalendar} onClick={toggleCalendar} />
      </div>
      {showCalendar && (
        <CalendarModal
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          onClose={() => setShowCalendar(false)}
        />
      )}
    </div>
  );
}