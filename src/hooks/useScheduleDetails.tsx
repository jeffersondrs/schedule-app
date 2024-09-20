import { useState, useEffect } from 'react';
import { ScheduleProps } from '@/utils/types';
import scheduleStore from '@/store/appointmentStore';

export const useScheduleDetails = (
  id: string,
  schedules: ScheduleProps[],
  isOpen: boolean,
  onClose: () => void,
) => {
  const [selectedSchedule, setSelectedSchedule] =
    useState<ScheduleProps | null>(null);

  useEffect(() => {
    if (isOpen) {
      const schedule = schedules.find((schedule) => schedule.id === id);
      setSelectedSchedule(schedule || null);
    }
  }, [id, isOpen, schedules]);

  const handleRemoveSchedule = () => {
    if (selectedSchedule) {
      scheduleStore.removeSchedule(selectedSchedule.id);
      setSelectedSchedule(null);
      onClose();
    }
  };

  return {
    selectedSchedule,
    handleRemoveSchedule,
  };
};
