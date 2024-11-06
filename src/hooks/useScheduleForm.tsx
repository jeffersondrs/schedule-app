import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { toast } from 'react-toastify';
import { useStore } from '@/store/storeContext';

const useScheduleForm = () => {
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
      toast.error('Erro ao realizar agendamento. Preencha todos os campos!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          color: '#fff',
          fontSize: '12px',
          fontWeight: 500,
        },
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

    toast.success('Agendamento realizado com sucesso!', {
      position: 'top-right',
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

  return {
    name,
    phone,
    scheduleDescription,
    scheduleTime,
    selectedDate,
    handleChange,
    handleDateChange,
    handleSubmit,
    setPhone,
  };
};

export default useScheduleForm;
