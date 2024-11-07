'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DateButtonComponent, Button, Modal, Form, SignIn } from '@/components';
import { ScheduleOverview } from '@/components/index';
import {
  BsCalendarDateFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from 'react-icons/bs';
import { Dayjs } from 'dayjs';
import { useStore } from '@/store/storeContext';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [type, setType] = useState('password');

  const { scheduleStore } = useStore();
  const [isLogged, setIsLogged] = useState(false);
  const handleDateChange = (newDate: Dayjs) => {
    scheduleStore.setSelectedDay(newDate);
  };

  const handleLogin = () => {
    if (user.email !== '' && user.password !== '') {
      setIsLogged(true);
    }
  };

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
                <span className="font-bold">{user.email.split('@')[0]}</span>!
              </p>
              <Image
                src="/avatar/avatar.jpeg"
                alt="avatar"
                width={100}
                height={100}
                className="rounded-full w-7 h-7 object-cover cursor-pointer"
              />
            </div>
            <SignIn provider='Google'/>
            <form
              className={`
              flex flex-row justify-center items-center gap-1 flex-wrap w-full              
              ${isLogged ? 'hidden' : 'visible'}
              `}
              onSubmit={handleLogin}
            >
              <input
                type="text"
                placeholder="e-mail"
                className="bg-gray-900 text-gray-100 p-2 rounded-md text-xs w-full sm:w-44 font-mono"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="bg-transparent flex relative w-full sm:w-40">
                <input
                  type={type}
                  placeholder="senha"
                  className="text-xs p-2 pr-7 w-full bg-gray-900 text-gray-100 rounded-md font-mono"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <div
                  className="cursor-pointer absolute right-2 top-2"
                  onClick={() =>
                    setType(type === 'password' ? 'text' : 'password')
                  }
                >
                  {type === 'password' ? (
                    <BsFillEyeFill className="text-gray-100" />
                  ) : (
                    <BsFillEyeSlashFill className="text-gray-100" />
                  )}
                </div>
              </div>
              <Button title="Entrar" size="xs" onClick={handleLogin} />
            </form>
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
        <Button title="Novo agendamento" onClick={handleOpenModal} size="sm" />
      </footer>
    </div>
  );
}
