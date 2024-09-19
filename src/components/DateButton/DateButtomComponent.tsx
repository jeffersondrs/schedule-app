'use client';

import React, { useState } from 'react';
import { BsCalendarDateFill } from 'react-icons/bs';
import { DateDisplayButton } from './DateDisplayButton';
import ToggleIcon from './ToggleIcon';
import CalendarModal from './CalendarModal';
import { useStore } from '@/store/storeContext';
import dayjs, { Dayjs } from 'dayjs';

interface DateButtonComponentProps {
  selectedDate: Dayjs;
  onDateChange: (newDate: Dayjs) => void;
}

const DateButtonComponent: React.FC<DateButtonComponentProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Dayjs>(dayjs());
  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleDateChange = (newDate: Dayjs) => {
    setDate(newDate);
    onDateChange(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative flex flex-row justify-center items-center border bg-primary border-gray-primary rounded-md w-full">
        <div className="p-2">
          <BsCalendarDateFill className="w-5 h-5 text-[#9282FA]" />
        </div>
        <span className="w-[1px] h-5 bg-gray-primary mr-2"></span>
        <DateDisplayButton selectedDate={date} onClick={toggleCalendar} />
        <ToggleIcon isOpen={showCalendar} onClick={toggleCalendar} />
      </div>
      {showCalendar && (
        <CalendarModal
          selectedDate={date}
          handleDateChange={handleDateChange}
          onClose={() => setShowCalendar(false)}
        />
      )}
    </div>
  );
};

export default DateButtonComponent;
