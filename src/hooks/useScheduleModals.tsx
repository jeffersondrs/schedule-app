import { useState } from 'react';
import { ScheduleProps } from '@/utils/types';
import { useStore } from '@/store/storeContext';

export default function useScheduleModals() {
  const { scheduleStore } = useStore();
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isOverviewModalOpen, setIsOverviewModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] =
    useState<ScheduleProps | null>(null);

  const openRemoveModal = (schedule: ScheduleProps) => {
    setSelectedSchedule(schedule);
    setIsRemoveModalOpen(true);
  };

  const confirmRemoveSchedule = () => {
    if (selectedSchedule) {
      scheduleStore.removeSchedule(selectedSchedule.id);
      setIsRemoveModalOpen(false);
      setSelectedSchedule(null);
    }
  };

  const cancelRemove = () => {
    setIsRemoveModalOpen(false);
    setSelectedSchedule(null);
  };

  const openOverviewModal = (schedule: ScheduleProps) => {
    setSelectedSchedule(schedule);
    setIsOverviewModalOpen(true);
  };

  const closeOverviewModal = () => {
    setIsOverviewModalOpen(false);
    setSelectedSchedule(null);
  };

  return {
    selectedSchedule,
    isRemoveModalOpen,
    isOverviewModalOpen,
    openRemoveModal,
    confirmRemoveSchedule,
    cancelRemove,
    openOverviewModal,
    closeOverviewModal,
  };
}
