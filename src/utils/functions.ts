import dayjs, { Dayjs } from "dayjs";
import { ActionType, FormState, ScheduleProps } from "./types";

export const sortSchedules = (data: ScheduleProps[]): ScheduleProps[] => {
  return data.sort((a, b) => {
    const timeA = a.scheduleTime.split(":").map(Number);
    const timeB = b.scheduleTime.split(":").map(Number);

    if (timeA[0] !== timeB[0]) {
      return timeA[0] - timeB[0];
    }
    return timeA[1] - timeB[1];
  });
};

export const filterSchedulesByDayAndPeriod = (
  data: ScheduleProps[],
  day: Dayjs
): {
  morning: ScheduleProps[];
  afternoon: ScheduleProps[];
  evening: ScheduleProps[];
} => {
  const filteredData = data.filter((schedule) => {
    const scheduleDate = dayjs(schedule.scheduleDate).format("DD/MM/YYYY");
    const filterDate = dayjs(day).format("DD/MM/YYYY");
    return scheduleDate === filterDate;
  });

  const morning = filteredData.filter((schedule) => {
    const hour = parseInt(schedule.scheduleTime.split(":")[0], 10);
    return hour >= 6 && hour < 13;
  });

  const afternoon = filteredData.filter((schedule) => {
    const hour = parseInt(schedule.scheduleTime.split(":")[0], 10);
    return hour >= 13 && hour < 18;
  });

  const evening = filteredData.filter((schedule) => {
    const hour = parseInt(schedule.scheduleTime.split(":")[0], 10);
    return hour >= 18 && hour < 24;
  });

  return {
    morning: sortSchedules(morning),
    afternoon: sortSchedules(afternoon),
    evening: sortSchedules(evening),
  };
};

export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");

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
