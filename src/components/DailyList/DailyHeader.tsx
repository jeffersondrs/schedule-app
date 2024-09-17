import { DailyHeaderProps } from "@/utils/types";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { IoSunny, IoPartlySunnySharp } from "react-icons/io5";
import { getTimeRangeForPeriod } from "@/utils/functions";

const getIconForPeriod = (periodOfDay: "Morning" | "Afternoon" | "Evening") => {
  const iconMap = {
    Morning: <IoSunny className="w-4 h-4 text-blue-400" />,
    Afternoon: <IoPartlySunnySharp className="w-5 h-5 text-orange-400" />,
    Evening: <BsFillMoonStarsFill className="w-5 h-5 text-yellow-400" />,
  };

  return iconMap[periodOfDay];
};

const DailyHeader = ({ toggleExpand, periodOfDay, isExpanded }: DailyHeaderProps) => {
  return (
    <header className="flex flex-row justify-between items-center w-full border-gray-primary px-3">
      <div className="flex flex-row items-center gap-2 p-2">
        {getIconForPeriod(periodOfDay)}
        <p className="tracking-wider text-white font-bold text-base capitalize">
          {periodOfDay}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center gap-2 p-2">
          <p className="tracking-wider text-base font-bold text-gray-400">
            {getTimeRangeForPeriod(periodOfDay)}
          </p>
        </div>
        <button
          aria-label="Expand Button"
          onClick={toggleExpand}
          className="text-gray-400 font-bold text-base transform transition-all duration-300 ease-in-out"
        >
          <FaChevronDown className={`w-5 h-5 ${isExpanded ? "rotate-180" : ""}`} />
        </button>
      </div>
    </header>
  );
};

export default DailyHeader;
