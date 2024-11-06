import React from 'react';
import { SchedulePeriod } from '@/utils/types';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSunny, IoPartlySunnySharp } from 'react-icons/io5';
import { observer } from 'mobx-react-lite';

const DailyHeader: React.FC<{ title: SchedulePeriod }> = observer(
  ({ title }) => {
    const iconMap = {
      manhã: <IoSunny className="w-5 h-5 text-blue-600" />,
      tarde: <IoPartlySunnySharp className="w-5 h-5 text-orange-600" />,
      noite: <BsFillMoonStarsFill className="w-5 h-5 text-yellow-600" />,
    };

    return (
      <header className="flex flex-row justify-between items-center w-full border-gray-primary px-3 border-b flex-wrap sm:flex-nowrap">
        <div className="flex flex-row items-center gap-2 p-2">
          {iconMap[title]}
          <p className="tracking-wider text-white font-thin text-sm capitalize">
            {title}
          </p>
        </div>
        <p className="text-xs text-texting text-end font-mono">
          {title === 'manhã'
            ? '09:00 - 12:00'
            : title === 'tarde'
              ? '13:00 - 18:00'
              : '19:00 - 21:00'}
        </p>
      </header>
    );
  },
);

export default DailyHeader;
