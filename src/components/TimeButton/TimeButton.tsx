import React, { useState } from 'react';
import { IoMdClock } from 'react-icons/io';
import TimePickerButton from './TimePickerButton';
import TimePickerDropdown from './TimePickerDropdown';
import { BasicTimePickerProps } from '@/utils/types';

export default function BasicTimePicker({
  title,
  setTime,
}: BasicTimePickerProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = () => {
    setIsOpened((prev) => !prev);
  };

  const handleTime = (selectedTime: string) => {
    setTime(selectedTime);
    handleIsOpened();
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative flex flex-row justify-center items-center border bg-primary border-gray-primary rounded-md w-full">
        <div className="p-2">
          <IoMdClock className="w-5 h-5 text-purple-800" />
        </div>
        <span className="w-[1px] h-5 bg-gray-primary mr-2"></span>

        <TimePickerButton
          title={title}
          isOpened={isOpened}
          onToggle={handleIsOpened}
        />

        <TimePickerDropdown isOpened={isOpened} onSelectTime={handleTime} />
      </div>
    </div>
  );
}
