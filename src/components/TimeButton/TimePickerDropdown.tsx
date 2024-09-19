import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { hours } from '@/utils/constants';
import { TimePickerDropdownProps } from '@/utils/types';

const TimePickerDropdown = ({
  isOpened,
  onSelectTime,
}: TimePickerDropdownProps) => (
  <AnimatePresence>
    {isOpened && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full mb-2 right-0 w-60 bg-primary rounded-md shadow-lg grid grid-cols-3 gap-1 border border-gray-primary p-2"
      >
        {hours.map((hour, index) => (
          <button
            key={index}
            className="p-2 hover:bg-secondary rounded-md cursor-pointer text-gray-100 text-center text-xs"
            onClick={(e) => {
              e.preventDefault();
              onSelectTime(hour);
            }}
            type="button"
            title={`Select ${hour}`}
          >
            {hour}
          </button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export default TimePickerDropdown;
