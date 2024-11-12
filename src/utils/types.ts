import { Dayjs } from 'dayjs';

export interface ScheduleProps {
  id: string;
  scheduleTime: string;
  scheduleDescription: string;
  userSchedule: string;
  scheduleDate: Dayjs;
  phoneScheduleUser: string;
  createdAt?: Dayjs;
  updatedAt?: Dayjs;
}

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  isClose: () => void;
};

export type SchedulePeriod = 'manha' | 'tarde' | 'noite';

export type SchedulesByDay = Record<
  string,
  {
    manha: ScheduleProps[];
    tarde: ScheduleProps[];
    noite: ScheduleProps[];
  }
>;

export interface InputPhoneProps {
  phone: string;
  setPhone: (phone: string) => void;
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

export interface ButtonProps {
  title?: string;
  onClick: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export type ToggleIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export type DateDisplayButtonProps = {
  selectedDate: Dayjs | null;
  onClick: () => void;
};

export interface OverViewModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  schedules: ScheduleProps[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
