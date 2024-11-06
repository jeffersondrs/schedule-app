import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/storeContext';
import RemoveModal from './RemoveModal';
import OverViewModal from './OverviewModal';
import ScheduleSection from './ScheduleSection';
import useScheduleModals from '@/hooks/useScheduleModals';
import { ScheduleProps } from '@/utils/types';

const ScheduleOverview: React.FC = observer(() => {
  const { scheduleStore } = useStore();
  const selectedDate = scheduleStore.selectedDay;
  const { morning, afternoon, evening } =
    scheduleStore.getSchedulesByDay(selectedDate);

  const {
    selectedSchedule,
    isRemoveModalOpen,
    isOverviewModalOpen,
    openRemoveModal,
    confirmRemoveSchedule,
    cancelRemove,
    openOverviewModal,
    closeOverviewModal,
  } = useScheduleModals();

  const renderSchedule = (schedule: ScheduleProps) => (
    <div
      className="flex flex-col justify-center md:justify-center md:items-center items-end border-b border-gray-primary p-4 md:flex-row md:gap-3 last:border-0 last:rounded-b-lg hover:bg-secondary"
      key={schedule.id}
    >
      <div className="flex sm:flex-row w-full items-end justify-center flex-col h-full md:items-center md:h-8">
        <div
          className="flex flex-col decoration-violet-50 justify-start w-full cursor-pointer h-full items-start sm:flex-row sm:items-center"
          onClick={() => openOverviewModal(schedule)}
        >
          <div className="flex flex-col gap-2 flex-wrap w-full max-w-40 sm:flex-row">
            <p className="tracking-wider text-xs font-bold text-gray-200 w-10">
              {schedule.scheduleTime}
            </p>
            <p className="tracking-wider text-xs text-gray-200 font-semibold max-w-32">
              {schedule.userSchedule}
            </p>
          </div>
          <p className="tracking-wider text-xs font-normal text-gray-400 break-words text-wrap w-full max-w-xl">
            {schedule.scheduleDescription}
          </p>
        </div>
        <button
          className="text-xs text-red-500 hover:text-red-700"
          onClick={() => openRemoveModal(schedule)}
          type="button"
        >
          Remove
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 gap-3 pb-16 relative">
      <ScheduleSection
        title="manhã"
        schedules={morning}
        renderSchedule={renderSchedule}
      />
      <ScheduleSection
        title="tarde"
        schedules={afternoon}
        renderSchedule={renderSchedule}
      />
      <ScheduleSection
        title="noite"
        schedules={evening}
        renderSchedule={renderSchedule}
      />
      {selectedSchedule && (
        <OverViewModal
          id={selectedSchedule.id}
          isOpen={isOverviewModalOpen}
          onClose={closeOverviewModal}
          schedules={[selectedSchedule]}
        />
      )}
      <RemoveModal
        isOpen={isRemoveModalOpen}
        onClose={cancelRemove}
        onConfirm={confirmRemoveSchedule}
      />
    </div>
  );
});

export default ScheduleOverview;
