import Calendar from "react-calendar";
import React from "react";

// eslint-disable-next-line react/prop-types
export default function DatePicker({ onChange }) {
  return (
    <Calendar
      onChange={onChange}
      //            value={pickedDate}
      minDate={new Date()}
      maxDetail="month"
      minDetail="month"
      calendarType="US"
    />
  );
}
