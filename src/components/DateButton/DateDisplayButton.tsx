import React from 'react';
import { DateDisplayButtonProps } from '@/utils/types';

const DateDisplayButton = ({
  selectedDate,
  onClick,
}: DateDisplayButtonProps) => (
  <button
    className="w-full h-10 bg-primary text-gray-300 rounded-md text-start text-xs"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'Select Date'}
  </button>
);

export default DateDisplayButton;
