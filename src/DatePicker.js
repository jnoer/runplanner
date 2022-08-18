import Calendar from 'react-calendar';

export default function DatePicker({onChange}) {

  return      <Calendar
            onChange={onChange}
//            value={pickedDate}
            minDate={new Date()}
            maxDetail='month'
            minDetail='month'
            calendarType='US'
        />
}