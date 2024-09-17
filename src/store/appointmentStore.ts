import dayjs, {Dayjs} from "dayjs";
import { makeAutoObservable } from "mobx";
import { ScheduleProps } from "@/utils/types";
import { v4 as uuidv4 } from "uuid";

class ScheduleStore {
  schedules: ScheduleProps[] = [];
  today: Dayjs = dayjs();

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== 'undefined') {
      this.loadSchedules();
    }
  }

  addSchedule(schedule: Omit<ScheduleProps, "id" | "createdAt" | "updatedAt">) {
    const newSchedule: ScheduleProps = {
      ...schedule,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.schedules.push(newSchedule);
    this.saveSchedules();
  }

  choiceDate(date: Dayjs) {
    this.today = date;
  }

  updateSchedule(id: string, updatedSchedule: Partial<ScheduleProps>) {
    const index = this.schedules.findIndex((schedule) => schedule.id === id);
    if (index !== -1) {
      this.schedules[index] = {
        ...this.schedules[index],
        ...updatedSchedule,
        updatedAt: new Date().toISOString(),
      };
      this.saveSchedules();
    }
  }

  removeSchedule(id: string) {
    this.schedules = this.schedules.filter((schedule) => schedule.id !== id);
    this.saveSchedules();
  }

  getScheduleById(id: string) {
    return this.schedules.find((schedule) => schedule.id === id);
  }

  saveSchedules() {
    if (typeof window !== 'undefined') {
      localStorage.setItem("schedules", JSON.stringify(this.schedules));
    }
  }

  loadSchedules() {
    if (typeof window !== 'undefined') {
      const schedules = localStorage.getItem("schedules");
      if (schedules) {
        this.schedules = JSON.parse(schedules);
      }
    }
  }

  deleteStore() {
    this.schedules = [];
    this.saveSchedules();
  }
}

const scheduleStore = new ScheduleStore();
export default scheduleStore;
