"use client";

import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import { ScheduleProps } from "@/utils/types";
import { filterSchedulesByDayAndPeriod } from "@/utils/functions";

const useFilteredAppointments = (initialDate: Dayjs, schedules: ScheduleProps[]) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(initialDate);
  const [filteredAppointments, setFilteredAppointments] = useState<{
    morning: ScheduleProps[];
    afternoon: ScheduleProps[];
    night: ScheduleProps[];
  }>({
    morning: [],
    afternoon: [],
    night: []
  });

  useEffect(() => {
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const filtered = filterSchedulesByDayAndPeriod(schedules, formattedDate);
    setFilteredAppointments(filtered);
  }, [selectedDate, schedules]);

  return {
    selectedDate,
    setSelectedDate,
    filteredAppointments
  };
};

export default useFilteredAppointments;
