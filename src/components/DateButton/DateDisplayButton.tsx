import React from 'react';
import { DateDisplayButtonProps } from '@/utils/types';
import { observer } from 'mobx-react-lite';

export const DateDisplayButton = observer(
  ({ selectedDate, onClick }: DateDisplayButtonProps) => (
    <button
      className="w-full h-10 bg-primary text-gray-300 rounded-md text-start text-xs"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      type="button"
      title="Select Date"
    >
      {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'Select Date'}
    </button>
  ),
);
