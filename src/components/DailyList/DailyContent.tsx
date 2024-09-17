import React from "react";
import { DailyContentList } from "../../utils/types";
import { useStore } from "@/store/storeContext";
import ScheduleRow from "./ScheduleContent/ScheduleRow";
import RemoveModal from "./ScheduleContent/RemoveModal";

interface DailyContentProps extends DailyContentList {
  isModalOpen: boolean;
  handleRemoveSchedule: () => void;
}

const DailyContent = ({ isExpanded, dailyList, isModalOpen, handleRemoveSchedule }: DailyContentProps) => {
  const { scheduleStore } = useStore();

  const removeSchedule = (scheduleId: string) => {
    scheduleStore.removeSchedule(scheduleId);
    handleRemoveSchedule();
  };

  return (
    <main className={`transition-all duration-500 ease-in-out w-full px-5 ${isExpanded ? 'max-h-96 overflow-y-auto my-5' : ''}`}>
      {dailyList.map((schedule) => (
        <>
          <ScheduleRow
            key={schedule.id}
            scheduleTime={schedule.scheduleTime}
            userSchedule={schedule.userSchedule}
            scheduleDescription={schedule.scheduleDescription}
            onRemove={handleRemoveSchedule}
          />
          {isModalOpen && (
            <RemoveModal
              isOpen={isModalOpen}
              onClose={handleRemoveSchedule}
              onConfirm={() => removeSchedule(schedule.id)}
            />
          )}
        </>
      ))}
    </main>
  );
};

export default DailyContent;
