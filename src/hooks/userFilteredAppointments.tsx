"use client";

import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { ScheduleProps } from "@/utils/types";
import { filterSchedulesByDayAndPeriod } from "@/utils/functions";
import { useStore } from '@/store/storeContext';

const useFilteredAppointments = (initialDate: string) => {
  const [selectedDate, setSelectedDate] = useState(dayjs(initialDate) as Dayjs);
  const [filteredAppointments, setFilteredAppointments] = useState<{
    morning: ScheduleProps[];
    afternoon: ScheduleProps[];
    evening: ScheduleProps[];
  }>({
    morning: [],
    afternoon: [],
    evening: []
  });

  const { scheduleStore } = useStore();

  useEffect(() => {
    const formattedDate = selectedDate.format('DD/MM/YYYY');
    const filtered = filterSchedulesByDayAndPeriod(scheduleStore.schedules, formattedDate);
    setFilteredAppointments(filtered);

  }, [selectedDate, scheduleStore.schedules]);

  return {
    selectedDate,
    setSelectedDate,
    filteredAppointments
  };
};

export default useFilteredAppointments;