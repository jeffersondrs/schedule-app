import React from "react";
import { useStore } from "@/store/storeContext";

interface NotifyProps {
  isOpenNotify: boolean;
  idSchedule: string;
  onClose: () => void;
}

export default function Notify({ isOpenNotify, idSchedule, onClose }: NotifyProps) {
  const { scheduleStore } = useStore();

  const handleDeleteSchedule = (id: string) => {
    scheduleStore.removeSchedule(id);
    onClose();
  };

  return (
    <div
      className={`w-full h-full absolute top-0 left-0 backdrop-blur-sm flex flex-col justify-center items-center
      ${isOpenNotify ? 'visible' : 'hidden'} transition-all duration-300 ease-in-out`}
    >
      <div className="bg-gray-950/80 h-52 flex flex-col justify-center items-center rounded-xl p-8 border-gray-primary border">
        <p className="text-white font-semibold text-md w-full text-center max-w-60 mb-5">
          Are you sure you want to delete this schedule?
        </p>
        <div className="flex flex-row justify-center items-center gap-3 mt-5">
          <button
            onClick={() => handleDeleteSchedule(idSchedule)}
            className="bg-purple-700 text-white font-bold px-3 py-2 rounded-lg max-w-36 text-sm"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white font-bold px-3 py-2 rounded-lg max-w-36 text-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
