import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/storeContext';
import dayjs from 'dayjs';
import { ScheduleProps } from '@/utils/types';
import RemoveModal from './RemoveModal';
import ScheduleSection from './ScheduleSection';

const ScheduleOverview: React.FC = observer(() => {
  const { scheduleStore } = useStore();
  const selectedDate = scheduleStore.selectedDay;
  const { morning, afternoon, evening } =
    scheduleStore.getSchedulesByDay(selectedDate);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedSchedule, setSelectedSchedule] =
    React.useState<ScheduleProps | null>(null);

  const handleRemoveClick = (schedule: ScheduleProps) => {
    setSelectedSchedule(schedule);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (selectedSchedule) {
      scheduleStore.removeSchedule(selectedSchedule.id);
      setIsModalOpen(false);
      setSelectedSchedule(null);
    }
  };

  const handleCancelRemove = () => {
    setIsModalOpen(false);
    setSelectedSchedule(null);
  };

  const renderSchedule = (schedule: ScheduleProps) => (
    <div
      className="flex flex-col justify-center md:justify-center md:items-center items-end border-b border-gray-primary p-4 md:flex-row md:gap-3 last:border-0"
      key={schedule.id}
    >
      <div className="flex flex-row gap-3 justify-between md:flex-row w-full ">
        <p className="tracking-wider text-xs font-bold text-gray-200">
          {schedule.scheduleTime}
        </p>
        <p className="tracking-wider text-xs text-gray-200 font-semibold w-32 ">
          {schedule.userSchedule}
        </p>
        <p className="tracking-wider text-xs font-normal text-gray-400 w-full">
          {schedule.scheduleDescription}
        </p>
      </div>
      <button
        className="text-xs text-red-500 hover:text-red-700"
        onClick={() => handleRemoveClick(schedule)}
        type="button"
      >
        Remove
      </button>
    </div>
  );

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 gap-3 pb-16 px-3 relative">
      <ScheduleSection
        title="morning"
        schedules={morning}
        renderSchedule={renderSchedule}
      />
      <ScheduleSection
        title="afternoon"
        schedules={afternoon}
        renderSchedule={renderSchedule}
      />
      <ScheduleSection
        title="evening"
        schedules={evening}
        renderSchedule={renderSchedule}
      />
      <RemoveModal
        isOpen={isModalOpen}
        onClose={handleCancelRemove}
        onConfirm={handleConfirmRemove}
      />
    </div>
  );
});

export default ScheduleOverview;
