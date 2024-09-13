import { ScheduleProps } from "./types";

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
  day: string
): { morning: ScheduleProps[], afternoon: ScheduleProps[], night: ScheduleProps[] } => {
  const filteredData = data.filter((schedule) => schedule.dateSchedule === day);

  const morning = filteredData.filter((schedule) => {
    const hour = parseInt(schedule.scheduleTime.split(":")[0], 10);
    return hour >= 6 && hour < 13;
  });

  const afternoon = filteredData.filter((schedule) => {
    const hour = parseInt(schedule.scheduleTime.split(":")[0], 10);
    return hour >= 13 && hour < 18;
  });

  const night = filteredData.filter((schedule) => {
    const hour = parseInt(schedule.scheduleTime.split(":")[0], 10);
    return hour >= 18 && hour < 24;
  });

  return {
    morning: sortSchedules(morning),
    afternoon: sortSchedules(afternoon),
    night: sortSchedules(night),
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