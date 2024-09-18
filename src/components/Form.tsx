'use client';

import React, { useReducer } from 'react';
import { IoPerson } from 'react-icons/io5';
import { ScheduleProps, FormState } from '../utils/types';
import DateButtonComponent from './DateButton/DateButtomComponent';
import BasicTimePicker from './TimeButton/TimeButton';
import InputPhone from './InputPhone';
import { formatPhoneNumber } from '@/utils/functions';
import { useStore } from '@/store/storeContext';
import { initialState } from '@/utils/constants';
import { reducer } from '@/utils/functions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, phone, scheduleDescription, scheduleTime, scheduleDate } =
    state;
  const { scheduleStore } = useStore();

  const notify = () =>
    toast.success('Appointment scheduled successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newSchedule: Omit<ScheduleProps, 'id' | 'createdAt' | 'updatedAt'> = {
      userSchedule: name,
      phoneScheduleUser: phone,
      scheduleDescription,
      scheduleTime,
      scheduleDate: dayjs(scheduleDate),
    };

    if (
      !name ||
      !phone ||
      !scheduleDescription ||
      !scheduleTime ||
      !scheduleDate
    ) {
      return toast.error('Please fill in all fields', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    notify();

    scheduleStore.addSchedule(newSchedule);

    dispatch({ field: 'name', value: '' });
    dispatch({ field: 'phone', value: '' });
    dispatch({ field: 'scheduleDescription', value: '' });
    dispatch({ field: 'scheduleTime', value: '' });
    dispatch({ field: 'scheduleDate', value: '' });
  };

  const handleChange = (field: keyof FormState, value: string) => {
    if (field === 'phone') {
      value = formatPhoneNumber(value);
    }
    dispatch({ field, value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-3 w-full z-50"
    >
      <ToastContainer
        toastClassName={
          'text-sm font-bold text-gray-800 bg-primary border-l-4 border-purple-600 shadow-md'
        }
        theme="dark"
      />
      <header className="flex flex-col justify-center items-start w-full gap-2">
        <h1 className="text-2xl font-bold text-gray-200">
          Schedule your appointment
        </h1>
        <p className="text-xs font-normal text-texting">
          Please fill in the customer details to schedule the appointment.
          Ensure you include all necessary information to guarantee efficient
          and personalized service.
        </p>
      </header>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="name" className="text-xs font-bold text-gray-200">
          Name
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md pl-2">
          <IoPerson className="w-5 h-5 text-purple-700" />
          <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full h-full bg-primary text-xs text-gray-200 p-2 rounded-r-md focus:bg-gray-700"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <InputPhone
          phone={phone}
          setPhone={(phone) => handleChange('phone', phone)}
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="service" className="text-xs font-bold text-gray-200">
          Description
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md ">
          <textarea
            id="service"
            value={scheduleDescription}
            onChange={(e) =>
              handleChange('scheduleDescription', e.target.value)
            }
            className="w-full h-24 bg-primary text-gray-200 rounded-md resize-none focus:bg-gray-700 p-3"
            rows={5}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label
          htmlFor="scheduleDate"
          className="text-xs font-bold text-gray-200"
        >
          Date
        </label>
        <DateButtonComponent
          setDate={(date) => handleChange('scheduleDate', date.toString())}
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label
          htmlFor="scheduleDate"
          className="text-xs font-bold text-gray-200"
        >
          Hour
        </label>
        <BasicTimePicker
          title={scheduleTime}
          setTime={(time) => handleChange('scheduleTime', time)}
        />
      </div>

      <footer className="flex flex-row justify-end items-center w-full">
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-900 text-gray-950 hover:text-gray-50 transform transition-all duration-300 ease-in-out z-10 text-sm shadow-md shadow-purple-400/20 font-bold py-2 px-4 rounded-lg"
        >
          Schedule
        </button>
      </footer>
    </form>
  );
}
