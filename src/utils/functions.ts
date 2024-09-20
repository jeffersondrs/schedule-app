import { ActionType, FormState, ScheduleProps } from './types';

export const sortSchedules = (data: ScheduleProps[]): ScheduleProps[] => {
  return data.slice().sort((a, b) => {
    const timeA = a.scheduleTime.split(':').map(Number);
    const timeB = b.scheduleTime.split(':').map(Number);

    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    }
    return timeA[1] - timeB[1];
  });
};

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  const limited = cleaned.slice(0, 11);

  const match = limited.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  if (limited.length > 6) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
  } else if (limited.length > 2) {
    return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
  } else if (limited.length > 0) {
    return `(${limited}`;
  }

  return limited;
};

export function reducer(state: FormState, action: ActionType): FormState {
  return {
    ...state,
    [action.field]: action.value,
  };
}

export const getTimeRangeForPeriod = (
  periodOfDay: 'morning' | 'afternoon' | 'evening',
) => {
  const timeMap = {
    morning: '09h-12h',
    afternoon: '13h-18h',
    evening: '19h-21h',
  };

  return timeMap[periodOfDay];
};
