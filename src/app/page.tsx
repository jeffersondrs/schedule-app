"use client";

import React from "react";
import { DateButton } from "@/components";
import DailyList from "@/components/DailyList";
import { BsCalendarDateFill } from "react-icons/bs";
import dayjs from 'dayjs';
import useFilteredAppointments from "@/hooks/userFilteredAppointments";
import { dataSchedules } from "@/utils/constants";

export default function Home() {
  const { selectedDate, setSelectedDate, filteredAppointments } = useFilteredAppointments(dayjs(), dataSchedules);

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 gap-3 pb-5">
      <header className="flex flex-col justify-center items-start">
        <div className="-translate-x-4 w-56 h-16 bg-purple-900 rounded-br-xl mb-5 p-2 flex flex-row justify-center items-center gap-2">
          <BsCalendarDateFill className="w-8 h-8 text-purple-500" />
          <p className="text-lg font-bold text-gray-200">Schedule-App</p>
        </div>
        <div className="flex flex-col justify-center items-start max-w-[350px] gap-2">
          <h1 className="text-3xl font-bold text-gray-100">Your Schedule</h1>
          <p className="text-sm font-normal text-gray-300">Here you can see all clients and services scheduled for today.</p>
          <DateButton date={selectedDate.format('DD/MM/YYYY')} setDate={(date) => setSelectedDate(dayjs(date, 'DD/MM/YYYY'))} />
        </div>
      </header>
      <main className="flex flex-col justify-start items-center w-full h-full px-4 mt-2 gap-4">
        <DailyList periodOfDay="morning" dailyList={filteredAppointments.morning} />
        <DailyList periodOfDay="afternoon" dailyList={filteredAppointments.afternoon} />
        <DailyList periodOfDay="night" dailyList={filteredAppointments.night} />
      </main>
    </div>
  );
}
