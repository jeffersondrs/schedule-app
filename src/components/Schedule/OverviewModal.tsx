import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/';
import { ScheduleProps } from '@/utils/types';
import dayjs from 'dayjs';
import { formatPhone } from '@/utils/functions';
import scheduleStore from '@/store/appointmentStore';

interface OverViewModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  schedules: ScheduleProps[];
}

const OverViewModal = ({
  id,
  isOpen,
  onClose,
  schedules,
}: OverViewModalProps) => {
  const [selectedSchedule, setSelectedSchedule] =
    useState<ScheduleProps | null>(null);

  useEffect(() => {
    if (isOpen) {
      const schedule = schedules.find((schedule) => schedule.id === id);
      setSelectedSchedule(schedule || null);
    }
  }, [id, isOpen, schedules]);

  const handleConfirmRemove = () => {
    if (selectedSchedule) {
      scheduleStore.removeSchedule(selectedSchedule.id);
      onClose();
      setSelectedSchedule(null);
    }
  };

  return (
    <Modal isOpen={isOpen} isClose={onClose}>
      <div className="flex flex-col justify-center items-center gap-3 w-full max-w-lg p-5 rounded-lg">
        <p className="text-base font-semibold text-texting p-2">
          Schedule Details:
        </p>
        {selectedSchedule ? (
          <div className="flex flex-col justify-center md:items-center w-full">
            <div className="flex flex-row gap-2 p-2 w-full flex-wrap">
              <p className="tracking-wider text-xs font-bold text-gray-200">
                Time:
              </p>
              <p className="tracking-wider text-xs font-bold text-texting">
                {selectedSchedule.scheduleTime}
              </p>
            </div>
            <div className="flex flex-row gap-2 p-2 w-full flex-wrap">
              <p className="tracking-wider text-xs text-gray-200 font-semibold">
                User:
              </p>
              <p className="tracking-wider text-xs font-bold text-texting">
                {selectedSchedule.userSchedule}
              </p>
            </div>
            <div className="flex flex-row gap-2 p-2 w-full flex-wrap">
              <p className="tracking-wider text-xs font-bold text-gray-200">
                Phone:
              </p>
              <p className="tracking-wider text-xs font-bold text-texting">
                {formatPhone(selectedSchedule.phoneScheduleUser)}
              </p>
            </div>
            <div className="flex flex-col gap-2 p-2 w-full flex-wrap ">
              <p className="tracking-wider text-xs font-bold text-gray-200">
                Description:
              </p>
              <p className="tracking-wider text-xs font-bold text-texting break-words text-wrap w-full max-w-52">
                {selectedSchedule.scheduleDescription}
              </p>
            </div>
            <div className="flex flex-row gap-2 p-2 w-full flex-wrap">
              <p className="tracking-wider text-xs font-bold text-gray-200">
                Date:
              </p>
              <p className="tracking-wider text-xs font-bold text-texting">
                {dayjs(selectedSchedule.scheduleDate).format('DD/MM/YYYY')}
              </p>
            </div>
            <div className="flex flex-row flex-wrap w-full justify-center items-center">
              <button
                className="text-xs text-purple-500 hover:text-purple-700 h-8 w-20"
                type="button"
              >
                Update
              </button>
              <button
                className="text-xs text-red-500 hover:text-red-700 h-8 w-20"
                type="button"
                onClick={handleConfirmRemove}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-200">No schedule found.</p>
        )}
      </div>
    </Modal>
  );
};

export default OverViewModal;
