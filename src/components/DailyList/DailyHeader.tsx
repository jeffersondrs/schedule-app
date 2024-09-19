import React from 'react';
import { SchedulePeriod } from '@/utils/types';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSunny, IoPartlySunnySharp } from 'react-icons/io5';
import { observer } from 'mobx-react-lite';

const DailyHeader: React.FC<{ title: SchedulePeriod }> = observer(
  ({ title }) => {
    const iconMap = {
      morning: <IoSunny className="w-5 h-5 text-blue-400" />,
      afternoon: <IoPartlySunnySharp className="w-5 h-5 text-orange-400" />,
      evening: <BsFillMoonStarsFill className="w-5 h-5 text-yellow-400" />,
    };

    return (
      <header className="flex flex-row justify-between items-center w-full border-gray-primary px-3 border-b">
        <div className="flex flex-row items-center gap-2 p-2">
          {iconMap[title]}
          <p className="tracking-wider text-white font-bold text-base capitalize">
            {title}
          </p>
        </div>
      </header>
    );
  },
);

export default DailyHeader;
