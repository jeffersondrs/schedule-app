import { makeAutoObservable, runInAction } from 'mobx';
import dayjs, { Dayjs } from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { ScheduleProps, SchedulePeriod, SchedulesByDay } from '@/utils/types';

class ScheduleStore {
  schedulesByDay: SchedulesByDay = {};
  defaultDay = dayjs();
  selectedDay: Dayjs = dayjs();

  constructor() {
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      this.loadSchedules();
    }
  }
  setSelectedDay(day: Dayjs) {
    this.selectedDay = day;
  }

  getPeriodByTime(scheduleTime: string): SchedulePeriod | null {
    const [hourString] = scheduleTime.split(':');
    const hour = parseInt(hourString, 10);

    if (hour >= 9 && hour < 12) {
      return 'morning';
    } else if (hour >= 13 && hour < 18) {
      return 'afternoon';
    } else if (hour >= 19 && hour <= 21) {
      return 'evening';
    }

    return null;
  }

  getSchedulesByDay(day: Dayjs | string): {
    morning: ScheduleProps[];
    afternoon: ScheduleProps[];
    evening: ScheduleProps[];
  } {
    const dayString = dayjs(day).format('YYYY-MM-DD');
    return (
      this.schedulesByDay[dayString] || {
        morning: [],
        afternoon: [],
        evening: [],
      }
    );
  }

  addSchedule(
    schedule: Omit<ScheduleProps, 'id' | 'createdAt' | 'updatedAt'>,
  ): void {
    const dayString = dayjs(schedule.scheduleDate).format('YYYY-MM-DD');
    const period = this.getPeriodByTime(schedule.scheduleTime);

    if (!period) {
      console.error('Horário fora dos intervalos permitidos');
      return;
    }

    const newSchedule: ScheduleProps = {
      ...schedule,
      id: uuidv4(),
      createdAt: dayjs(),
      updatedAt: dayjs(),
    };

    runInAction(() => {
      if (!this.schedulesByDay[dayString]) {
        this.schedulesByDay[dayString] = {
          morning: [],
          afternoon: [],
          evening: [],
        };
      }

      this.schedulesByDay[dayString][period].push(newSchedule);
      this.saveSchedules();
    });
  }

  updateSchedule(id: string, updatedSchedule: Partial<ScheduleProps>): void {
    const found = this.findScheduleById(id);

    if (found) {
      const { dayString, period } = found;
      const schedules = this.schedulesByDay[dayString][period];
      const scheduleIndex = schedules.findIndex((s) => s.id === id);

      if (scheduleIndex !== -1) {
        const schedule = schedules[scheduleIndex];
        const updated = {
          ...schedule,
          ...updatedSchedule,
          updatedAt: dayjs(),
        };

        runInAction(() => {
          this.schedulesByDay[dayString][period][scheduleIndex] = updated;
          this.saveSchedules();
        });
      }
    }
  }

  removeSchedule(id: string): void {
    const found = this.findScheduleById(id);

    if (found) {
      const { dayString, period } = found;

      runInAction(() => {
        this.schedulesByDay[dayString][period] = this.schedulesByDay[dayString][
          period
        ].filter((schedule) => schedule.id !== id);
        this.saveSchedules();
      });
    }
  }

  findScheduleById(
    id: string,
  ): { dayString: string; period: SchedulePeriod } | null {
    for (const [dayString, periods] of Object.entries(this.schedulesByDay)) {
      for (const period of ['morning', 'afternoon', 'evening'] as const) {
        if (periods[period].some((schedule) => schedule.id === id)) {
          return { dayString, period };
        }
      }
    }
    return null;
  }

  loadSchedules(): void {
    if (typeof window !== 'undefined') {
      const schedules = localStorage.getItem('schedulesByDay');
      if (schedules) {
        this.schedulesByDay = JSON.parse(schedules);
      }
    }
  }

  saveSchedules(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'schedulesByDay',
        JSON.stringify(this.schedulesByDay),
      );
    }
  }

  clearAllSchedules(): void {
    runInAction(() => {
      this.schedulesByDay = {};
      this.saveSchedules();
    });
  }
}

const scheduleStore = new ScheduleStore();
export default scheduleStore;
