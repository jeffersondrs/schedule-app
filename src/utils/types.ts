import { Dayjs } from "dayjs";

export interface ScheduleProps {
  id: string;
  scheduleTime: string;
  scheduleDescription: string;
  userSchedule: string;
  scheduleDate: string;
  phoneScheduleUser: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DailyListProps {
  periodOfDay: "Morning" | "Afternoon" | "Evening";
  dailyList: ScheduleProps[];
}

export interface FormState {
  name: string;
  phone: string;
  scheduleDescription: string;
  scheduleTime: string;
  scheduleDate: string;
}

export interface FormProps {
  onSubmit: (data: ScheduleProps) => void;
}

export type ActionType =
  | { field: "name"; value: string }
  | { field: "phone"; value: string }
  | { field: "scheduleDescription"; value: string }
  | { field: "scheduleTime"; value: string }
  | { field: "scheduleDate"; value: string };

export interface DailyHeaderProps {
  periodOfDay: string;
  onToggleShowScheduleList: () => void;
  isShowScheduleList: boolean;
}

export interface DailyContentList extends Pick<DailyListProps, "dailyList"> {
  isExpanded: boolean;
}
