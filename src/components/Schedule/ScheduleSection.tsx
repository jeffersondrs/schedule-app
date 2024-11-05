import React from 'react';
import { ScheduleProps, SchedulePeriod } from '@/utils/types';
import DailyHeader from './ScheduleHeader';
import { observer } from 'mobx-react-lite';

interface ScheduleSectionProps {
  title: SchedulePeriod;
  schedules: ScheduleProps[];
  renderSchedule: (schedule: ScheduleProps) => JSX.Element;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = observer(
  ({ title, schedules, renderSchedule }) => {
    return (
      <section className="w-full max-w-4xl bg-primary rounded-md p-2">
        <DailyHeader title={title} />
        {schedules.length > 0 ? (
          schedules.map(renderSchedule)
        ) : (
          <div className="flex flex-col justify-center items-start border-b border-gray-primary p-4 md:flex-row md:gap-3 last:border-0">
            <div className="flex flex-row gap-3 justify-between md:flex-row w-full text-start">
              <p className="text-xs md:text-sm text-gray-400">
                No schedules for the {title}.
              </p>
            </div>
          </div>
        )}
      </section>
    );
  },
);

export default ScheduleSection;
