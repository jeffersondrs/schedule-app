import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { TimePickerButtonProps } from '@/utils/types';

const TimePickerButton = ({
  title,
  isOpened,
  onToggle,
}: TimePickerButtonProps) => (
  <div className="flex flex-row justify-between items-center w-full">
    <button
      className="w-full h-10 bg-primary text-gray-300 rounded-md text-start text-xs"
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
      id="scheduleTime"
      type="button"
    >
      {title || 'Select time'}
    </button>
    <button
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
      className="text-gray-300 cursor-pointer p-2"
      type="button"
      title="Toggle"
    >
      <FaAngleDown
        className={`w-5 h-5 text-gray-300 transition-transform ${isOpened ? 'rotate-180' : 'rotate-0'}`}
      />
    </button>
  </div>
);

export default TimePickerButton;
