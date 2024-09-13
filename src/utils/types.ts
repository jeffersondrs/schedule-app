export interface ScheduleProps {
  id: string;
  scheduleTime: string;
  scheduleDescription: string;
  userSchedule: string;
  dateSchedule: string;
  phoneScheduleUser: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DailyListProps {
  periodOfDay: string;
  dailyList: ScheduleProps[];
};