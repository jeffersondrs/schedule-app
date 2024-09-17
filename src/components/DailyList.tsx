"use client";

import React, { useState } from "react";
import { IoSunny, IoPartlySunnySharp } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { DailyListProps } from "../utils/types";
import { FaChevronDown } from "react-icons/fa";

export default function DailyList({ periodOfDay, dailyList }: DailyListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-primary rounded-xl py-2 w-full">
      <header className={`flex flex-row justify-center items-center w-full  ${dailyList.length && isExpanded ? 'border-b md:border-b' : ''
        } border-gray-primary px-3`}>
        <div className="flex flex-row justify-center items-center gap-2 p-2">
          {
            periodOfDay === 'Morning' ? (
              <IoSunny className="w-4 h-4 text-blue-400" />
            ) : periodOfDay === 'Afternoon' ? (
              <IoPartlySunnySharp className="tracking-wider w-5 h-5 text-orange-400" />
            ) : periodOfDay === 'Evening' ? (
              <BsFillMoonStarsFill className="w-5 h-5 text-yellow-400" />
            ) : null
          }
          <p className="tracking-wider text-white font-bold text-base capitalize">{periodOfDay}</p>
        </div>
        {periodOfDay === 'Morning' ? (<div className="flex flex-row justify-end gap-2 w-full p-2">
          <p className="tracking-wider text-base font-bold text-gray-400">9h-12h</p>
        </div>) : periodOfDay === 'Afternoon' ? (<div className="flex flex-row justify-end gap-2 w-full p-2">
          <p className="tracking-wider text-base font-bold text-gray-400">13h-18h</p>
        </div>) : periodOfDay === 'Evening' ? (<div className="flex flex-row justify-end gap-2 w-full p-2">
          <p className="tracking-wider text-base font-bold text-gray-400">19h-21h</p>
        </div>) : null}

        <div className="flex flex-col justify-center items-center">
          <button aria-label="button" onClick={toggleExpand} className="text-gray-400 font-bold text-base transform transition-all duration-300 ease-in-out">
            <FaChevronDown className={`w-5 h-5 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </header>
     <main className={`transition-all duration-500 ease-in-out w-full px-5 ${isExpanded ? 'max-h-96 overflow-y-auto my-5' : ''}`}>
        {dailyList.map((schedule) => (
          <div key={schedule.id} className="flex flex-col justify-center items-start border-b border-gray-primary p-4 md:flex-row md:gap-3 last:border-0">
            <div className="flex flex-row gap-3 justify-between md:flex-row md:w-96">
              <p className="tracking-wider text-xs font-bold text-gray-200">{schedule.scheduleTime}</p>
              <p className="tracking-wider text-xs font-light text-gray-400">{schedule.userSchedule}</p>
            </div>
            <div className="flex flex-row w-full">
              <p className="tracking-wider text-xs font-normal text-gray-400">{schedule.scheduleDescription}</p>
            </div>
            <div className="flex flex-row justify-end items-center w-full">
              <button className="text-xs font-normal text-gray-600">Remove schedule</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}