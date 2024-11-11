'use client';

import { IoPerson } from 'react-icons/io5';
import DateButtonComponent from './DateButton/DateButtomComponent';
import BasicTimePicker from './TimeButton/TimeButton';
import InputPhone from './InputPhone';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useScheduleForm from '@/hooks/useScheduleForm';
import { Button } from '@/components/ui/button';

export default function Form() {
  const {
    name,
    phone,
    scheduleDescription,
    scheduleTime,
    handleChange,
    handleDateChange,
    handleSubmit,
    setPhone,
  } = useScheduleForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-3 w-full max-w-xl z-50 p-6"
    >
      <ToastContainer
        toastClassName={
          'text-sm text-gray-800 bg-primary border-l-4 border-purple-600 shadow-md'
        }
        theme="dark"
      />
      <header className="flex flex-col justify-center items-start w-full gap-2">
        <h1 className="text-sm text-gray-200">Agende um horário</h1>
        <p className="text-xs font-normal text-texting">
          Por favor, preencha os campos abaixo para agendar um horário. Preencha
          todos os campos para confirmar o agendamento.
        </p>
      </header>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="name" className="text-xs text-gray-200">
          Nome
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md pl-2">
          <IoPerson className="w-5 h-5 text-[#9282FA]" />
          <span className="w-[1px] h-5 bg-gray-primary mx-2"></span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full h-full bg-primary text-xs text-gray-200 p-2 rounded-r-md focus:bg-gray-700"
            maxLength={14}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <InputPhone phone={phone} setPhone={setPhone} />
      </div>

      <div className="flex flex-col justify-center items-start gap-1 w-full">
        <label htmlFor="service" className="text-xs text-gray-200">
          Descrição
        </label>
        <div className="flex flex-row justify-center items-center w-full border-gray-primary border rounded-md ">
          <textarea
            id="service"
            value={scheduleDescription}
            placeholder="Descreva o serviço que deseja agendar"
            onChange={(e) =>
              handleChange('scheduleDescription', e.target.value)
            }
            className="w-full h-20 bg-primary text-gray-200 rounded-md resize-none focus:bg-gray-700 p-3 text-xs"
            rows={3}
            maxLength={100}
          />
        </div>
      </div>

      <div className="flex flex-row w-full gap-2 flex-wrap sm:flex-nowrap items-center justify-center">
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label htmlFor="scheduleDate" className="text-xs text-gray-200">
            Data
          </label>
          <DateButtonComponent onDateChange={handleDateChange} />
        </div>

        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label htmlFor="scheduleDate" className="text-xs text-gray-200">
            Horário
          </label>
          <BasicTimePicker
            title={scheduleTime}
            setTime={(time) => handleChange('scheduleTime', time)}
          />
        </div>
      </div>

      <footer className="flex flex-row justify-end items-center w-full">
        <Button variant="default" type="submit" className=" text-xs">
          Agendar
        </Button>
      </footer>
    </form>
  );
}
