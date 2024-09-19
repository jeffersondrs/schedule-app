'use client';

import React, { useState } from 'react';
import { IoPerson } from 'react-icons/io5';
import DateButtonComponent from './DateButton/DateButtomComponent';
import BasicTimePicker from './TimeButton/TimeButton';
import InputPhone from './InputPhone';
import { useStore } from '@/store/storeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs, { Dayjs } from 'dayjs';

export default function Form() {
  const { scheduleStore } = useStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [scheduleDescription, setScheduleDescription] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'scheduleDescription':
        setScheduleDescription(value);
        break;
      case 'scheduleTime':
        setScheduleTime(value);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (newDate: Dayjs) => {
    setSelectedDate(newDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !scheduleDescription || !scheduleTime) {
      toast.error('Please fill in all fields', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    scheduleStore.addSchedule({
      scheduleDate: selectedDate,
      scheduleTime,
      scheduleDescription,
      userSchedule: name,
      phoneScheduleUser: phone,
    });

    toast.success('Schedule added successfully', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setName('');
    setPhone('');
    setScheduleDescription('');
    setScheduleTime('');
    setSelectedDate(dayjs());
  };

  const formatPhone = (phone: string): string => {
    // Remove todos os caracteres que não são números
    const cleaned = phone.replace(/\D/g, '');

    // Limita a entrada a 11 dígitos
    const limited = cleaned.slice(0, 11);

    // Formata o telefone
    const match = limited.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    // Formata parcialmente enquanto o usuário digita
    if (limited.length > 6) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    } else if (limited.length > 2) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else if (limited.length > 0) {
      return `(${limited}`;
    }

    return limited;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setPhone(formattedPhone);
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
          handlePhoneChange={handlePhoneChange}
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
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
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
          title="Schedule"
        >
          Schedule
        </button>
      </footer>
    </form>
  );
}
