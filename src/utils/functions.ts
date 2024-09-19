import { ActionType, FormState, ScheduleProps } from './types';

export const sortSchedules = (data: ScheduleProps[]): ScheduleProps[] => {
  return data.sort((a, b) => {
    const timeA = a.scheduleTime.split(':').map(Number);
    const timeB = b.scheduleTime.split(':').map(Number);

    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    }
    return timeA[1] - timeB[1];
  });
};

export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '');

  const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return value;
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
