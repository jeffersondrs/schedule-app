// stores/scheduleStore.ts
import { makeAutoObservable } from "mobx";
import { ScheduleProps } from "@/utils/types";
import { v4 as uuidv4 } from "uuid";

class ScheduleStore {
  schedules: ScheduleProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  // Adiciona um novo agendamento
  addSchedule(schedule: Omit<ScheduleProps, "id" | "createdAt" | "updatedAt">) {
    const newSchedule: ScheduleProps = {
      ...schedule,
      id: uuidv4(), // gera um ID único
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.schedules.push(newSchedule);
  }

  // Atualiza um agendamento existente
  updateSchedule(id: string, updatedSchedule: Partial<ScheduleProps>) {
    const index = this.schedules.findIndex(schedule => schedule.id === id);
    if (index !== -1) {
      this.schedules[index] = {
        ...this.schedules[index],
        ...updatedSchedule,
        updatedAt: new Date().toISOString(),
      };
    }
  }

  // Remove um agendamento
  removeSchedule(id: string) {
    this.schedules = this.schedules.filter(schedule => schedule.id !== id);
  }

  // Pega um agendamento por ID
  getScheduleById(id: string) {
    return this.schedules.find(schedule => schedule.id === id);
  }
}

const scheduleStore = new ScheduleStore();
export default scheduleStore;
