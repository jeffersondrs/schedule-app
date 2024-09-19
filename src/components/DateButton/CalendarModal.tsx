import React from 'react';
import { IoClose } from 'react-icons/io5';
import { Dayjs } from 'dayjs';
import { CalendarUi } from './CalendarUi';

type CalendarModalProps = {
  selectedDate: Dayjs;
  handleDateChange: (date: Dayjs) => void;
  onClose: () => void;
};

const CalendarModal = ({
  selectedDate,
  handleDateChange,
  onClose,
}: CalendarModalProps) => (
  <div className="bg-primary transition-all duration-300 ease-in-out z-30 fixed px-6 pt-20 top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
    <button
      onClick={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="text-white text-right w-5 h-5 absolute top-3 right-3"
      title="Close"
      type="button"
    >
      <IoClose className="w-5 h-5 text-white" />
    </button>
    <CalendarUi
      selectedDate={selectedDate}
      handleDateChange={handleDateChange}
    />
  </div>
);

export default CalendarModal;
