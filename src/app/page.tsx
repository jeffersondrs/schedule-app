"use client";

import React from "react";
import { DateButton, Button, Modal, Form } from "@/components";
import DailyList from "@/components/DailyList/DailyList";
import { BsCalendarDateFill } from "react-icons/bs";
import dayjs from 'dayjs';
import useFilteredAppointments from "@/hooks/userFilteredAppointments";
import { observer } from "mobx-react-lite";
// import { useStore } from "@/store/storeContext";

const Home = () => {
  // const { scheduleStore } = useStore();
  const { setSelectedDate, filteredAppointments } = useFilteredAppointments();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 gap-3 pb-16 px-3 relative">
      <header className="flex flex-col justify-center items-start w-full max-w-4xl">
        <div className="max-w-56 h-16 bg-primary rounded-br-xl mb-5 p-2 flex flex-row justify-center items-center gap-2">
          <BsCalendarDateFill className="w-8 h-8 text-[#9282FA]" />
          <p className="text-base font-bold text-[#9282FA] uppercase">Schedule App</p>
        </div>
        <div className="flex flex-col justify-center items-start max-w-[350px] gap-2 md:flex-row md:max-w-4xl md:py-3">
          <div className="w-full h-full flex-col justify-start items-center">
            <h1 className="text-2xl font-bold text-gray-100">Your Schedule</h1>
            <p className="text-xs font-normal text-gray-300">Here you can see all clients and services scheduled for today.</p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-96">
            <DateButton setDate={(date) => setSelectedDate(dayjs(date))} />
          </div>
        </div>
      </header>

      <DailyList periodOfDay="Morning" dailyList={filteredAppointments.morning} />
      <DailyList periodOfDay="Afternoon" dailyList={filteredAppointments.afternoon} />
      <DailyList periodOfDay="Evening" dailyList={filteredAppointments.evening} />

      <Modal isOpen={isModalOpen} isClose={handleOpenModal}>
        <Form />
      </Modal>
      <footer className="bottom-5 max-w-4xl w-full fixed flex flex-row justify-end">
        <Button title="Novo agendamento" onClick={handleOpenModal} />
      </footer>
    </div>
  );
};

export default observer(Home);