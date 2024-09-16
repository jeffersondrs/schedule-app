import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Dayjs } from 'dayjs';

type CalendarUiProps = {
  selectedDate: Dayjs;
  handleDateChange: (newDate: Dayjs) => void;
};

export default function CalendarUi({ selectedDate, handleDateChange }: CalendarUiProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}
      localeText={{
        year: 'Ano',
        month: 'Mês',
        day: 'Dia',
      }}
    >
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange}
        slotProps={{
          switchViewButton: {
            sx: {
              color: '#d1d5db',
            },
          }
        }}
        sx={{
          backgroundColor: '#030712',
          color: '#6b7280',
          '.MuiPickersDay-root': {
            color: '#6b7280',
            '&.Mui-selected': {
              backgroundColor: '#6b21a8',
              color: '#d1d5db',
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'dark#6b7280',
            },
          },
          '.MuiPickersCalendarHeader-root': {
            color: '#6b7280',
          },
          '.MuiPickersCalendarHeader-label': {
            color: '#d1d5db',
          },
          '.MuiPickersArrowSwitcher-root button': {
            color: '#d1d5db',
          },
        }}
      />
    </LocalizationProvider>
  );
}
