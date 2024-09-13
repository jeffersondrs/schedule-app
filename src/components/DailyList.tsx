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
    <div className="flex flex-col justify-center items-center w-full bg-gray-800 rounded-xl py-2">
      <header className={`flex flex-row justify-between items-center w-full ${dailyList.length && isExpanded ? 'border-b' : ''
        } border-gray-700 px-3`}>
        <div className="w-full flex flex-row justify-start items-center gap-2 p-2">
          {
            periodOfDay === 'morning' ? (
              <IoSunny className="w-4 h-4 text-blue-400" />
            ) : periodOfDay === 'afternoon' ? (
              <IoPartlySunnySharp className="w-5 h-5 text-orange-400" />
            ) : periodOfDay === 'night' ? (
              <BsFillMoonStarsFill className="w-5 h-5 text-yellow-400" />
            ) : null
          }
          <p className="w-1/2 text-white font-bold text-lg capitalize">{periodOfDay}</p>
        </div>
        {periodOfDay === 'morning' ? (<div className="flex flex-row justify-end gap-2 w-full p-2">
          <p className="text-lg font-bold text-gray-400">9h-12h</p>
        </div>) : periodOfDay === 'afternoon' ? (<div className="flex flex-row justify-end gap-2 w-full p-2">
          <p className="text-lg font-bold text-gray-400">13h-18h</p>
        </div>) : periodOfDay === 'night' ? (<div className="flex flex-row justify-end gap-2 w-full p-2">
          <p className="text-lg font-bold text-gray-400">19h-21h</p>
        </div>) : null}

        <div className="flex flex-col justify-center items-center">
          <button onClick={toggleExpand} className="text-gray-400 font-bold text-lg transform transition-all duration-300 ease-in-out">
            <FaChevronDown className={`w-5 h-5 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </header>
      {dailyList.length > 1 && (<main className={`transition-all duration-500 ease-in-out w-full px-5 ${isExpanded ? 'max-h-96 overflow-y-auto my-5' : 'max-h-0 overflow-hidden'}`}>
        {dailyList.map((schedule) => (
          <div key={schedule.id} className="flex flex-col justify-center items-start border-b border-gray-700 p-4">
            <div className="flex flex-row gap-3 justify-between">
              <p className="text-sm font-bold text-gray-200">{schedule.scheduleTime}</p>
              <p className="text-sm font-light text-gray-400">{schedule.userSchedule}</p>
            </div>
            <div className="flex flex-row w-full">
              <p className="text-sm font-normal text-gray-400">{schedule.scheduleDescription}</p>
            </div>
            <div className="flex flex-row justify-end items-center w-full">
              <button className="text-xs font-normal text-gray-600">Remove schedule</button>
            </div>
          </div>
        ))}
      </main>)}
    </div>
  )
}