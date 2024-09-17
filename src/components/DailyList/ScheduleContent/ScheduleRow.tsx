import React from "react";

interface ScheduleRowProps {
  scheduleTime: string;
  userSchedule: string;
  scheduleDescription: string;
  onRemove: () => void;
}

const ScheduleRow = ({ scheduleTime, userSchedule, scheduleDescription, onRemove }: ScheduleRowProps) => (
  <div className="flex flex-col justify-center items-start border-b border-gray-primary p-4 md:flex-row md:gap-3 last:border-0">
    <div className="flex flex-row gap-3 justify-between md:flex-row md:w-96">
      <p className="tracking-wider text-xs font-bold text-gray-200">{scheduleTime}</p>
      <p className="tracking-wider text-xs font-light text-gray-400">{userSchedule}</p>
    </div>
    <div className="flex flex-row w-full">
      <p className="tracking-wider text-xs font-normal text-gray-400">{scheduleDescription}</p>
    </div>
    <div className="flex flex-row justify-end items-center w-full">
      <button className="text-xs font-normal text-gray-600" onClick={onRemove}>
        Remove schedule
      </button>
    </div>
  </div>
);

export default ScheduleRow;
