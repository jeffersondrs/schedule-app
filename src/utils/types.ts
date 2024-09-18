import { Dayjs } from 'dayjs';

export interface ScheduleProps {
  id: string;
  scheduleTime: string;
  scheduleDescription: string;
  userSchedule: string;
  scheduleDate: Dayjs;
  phoneScheduleUser: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DailyListProps {
  periodOfDay: 'Morning' | 'Afternoon' | 'Evening';
  dailyList: ScheduleProps[];
}

export interface FormState {
  name: string;
  phone: string;
  scheduleDescription: string;
  scheduleTime: string;
  scheduleDate: Dayjs;
}

export interface TimePickerDropdownProps {
  isOpened: boolean;
  onSelectTime: (time: string) => void;
}

export interface TimePickerButtonProps {
  title: string;
  isOpened: boolean;
  onToggle: () => void;
}

export interface BasicTimePickerProps {
  title: string;
  setTime: (time: string) => void;
}

export interface FormProps {
  onSubmit: (data: ScheduleProps) => void;
}

export type ActionType =
  | { field: 'name'; value: string }
  | { field: 'phone'; value: string }
  | { field: 'scheduleDescription'; value: string }
  | { field: 'scheduleTime'; value: string }
  | { field: 'scheduleDate'; value: string };

export interface DailyContentList extends Pick<DailyListProps, 'dailyList'> {}

export type DailyHeaderProps = Omit<DailyListProps, 'dailyList'>;

export type ToggleIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export type DateDisplayButtonProps = {
  selectedDate: Dayjs | null;
  onClick: () => void;
};

export type DateButtonProps = {
  setDate: (date: Dayjs) => void;
};
