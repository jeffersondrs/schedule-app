'use client';

import React, { useEffect, useState } from 'react';
import {
  DateButtonComponent,
  Modal,
  Form,
  ScheduleOverview,
  DropDownMenu,
} from '@/components';
import { Button } from '@/components/ui/button';
import { BsCalendarDateFill } from 'react-icons/bs';
import { Dayjs } from 'dayjs';
import { useStore } from '@/store/storeContext';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { scheduleStore } = useStore();
  const handleDateChange = (newDate: Dayjs) => {
    scheduleStore.setSelectedDay(newDate);
  };

  const { isLogged, setIsLogged } = useAuth();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [session, setIsLogged]);

  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 gap-3 pb-16 px-3 relative">
      <header className="flex flex-col justify-center items-start w-full max-w-4xl">
        <div className="bg-primary rounded-br-xl mb-5 p-2 flex flex-row flex-wrap justify-between items-center gap-2 w-full">
          <div className="flex flex-row gap-2 justify-center items-center">
            <BsCalendarDateFill className="w-6 h-6 text-[#9282FA]" />
            <p className="text-base font-bold text-[#9282FA] uppercase font-mono">
              Agendamentos
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div
              className={`
            flex flex-row justify-center items-center gap-2
            ${isLogged ? 'visible' : 'hidden'}
              `}
            >
              <p className="text-xs font-normal text-gray-300">
                Bem vindo,{' '}
                <span className="font-bold">
                  {session?.user?.name?.split(' ')[0]}
                </span>
                !
              </p>
              <DropDownMenu />
            </div>
            <div
              className={`
              flex flex-row justify-center items-center gap-1
              ${isLogged ? 'hidden' : 'visible'}
              `}
            >
              <p className="text-xs font-normal text-gray-300">
                Faça login para acessar sua conta.
              </p>
              <Link href="/auth/signin">
                <p className="text-xs font-bold text-[#9282FA] cursor-pointer">
                  Login
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-2 flex-wrap md:py-3 w-full">
          <div className="h-full flex-col justify-start items-center">
            <h1 className="text-sm font-medium text-gray-100">
              Seus agendamentos
            </h1>
            <p className="text-xs font-normal text-gray-300">
              Aqui você pode visualizar, editar e criar novos agendamentos.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-48">
            <DateButtonComponent onDateChange={handleDateChange} />
          </div>
        </div>
      </header>

      <ScheduleOverview />

      <Modal isOpen={isModalOpen} isClose={handleOpenModal}>
        <Form />
      </Modal>
      <footer className="bottom-3 right-3 max-w-4xl w-full fixed flex flex-row justify-end">
        <Button
          variant="default"
          className=" text-xs"
          onClick={handleOpenModal}
        >
          Novo Agendamento
        </Button>
      </footer>
    </div>
  );
}
