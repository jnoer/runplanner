import { ics } from "./utilities/ics.js";
import Calendar from "react-calendar";
import { React, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// TODO: Bug - Every time we navigate to the next calendar picker month, a new date is selected.
// TODO: Calendar is showing two months at the same time. We want only one.
// TODO: After the user selects a date, the calendar needs to jump to the training start date.
// TODO: Save data in case page is refreshed?

import {
  FridayActivities,
  CrossTrainingActivities,
  PaceActivities,
  ShortRunActivities,
  ShortRunIncreasingActivities,
  PaceAndTempActivities,
  LongRunActivities,
} from "./weeks";
import { ActivityType } from "./ActivityType";
import Button from "@mui/material/Button";
import tileContent from "./TileContent";
import { buildDateArray } from "./utilities/calendar-utils";

function App() {
  const [raceDate, setRaceDate] = useState(dayjs());
  const [trainingStartDate, setTrainingStartDate] = useState(dayjs());
  const [dates, setDates] = useState([]);

  function saveIcs() {
    var cal = ics();

    dates.forEach((date) => {
      cal.addEvent(date?.activity?.toText(), "", "", date.date, date.date);
    });

    cal.download("test.ics");
  }

  // function onChange(dateEvent) {
  //   console.log(`Entered date target.value: ${dateEvent.target.value}`);
  //
  //   // const enteredDate = new Date(dateEvent.target.value);
  //   const [year, month, day] = dateEvent.target.value.split("-");
  //   const enteredDate = new Date(year, month - 1, day); // This constructor uses the user's timezone, not UTC
  //   console.log(`Entered Date: ${enteredDate}`);
  //   console.log(`Entered Date.toDateString: ${enteredDate.toDateString()}`);
  //
  //   setDates([]);
  //   // setRaceDate(clickedDate);
  //   setRaceDate(enteredDate);
  //
  //   const startDate = new Date(enteredDate);
  //   startDate.setDate(enteredDate.getDate() - 7 * 12);
  //
  //   // Set start date to the first Monday after the start date.
  //   while (startDate.getDay() !== 1) {
  //     startDate.setDate(startDate.getDate() + 1);
  //   }
  //
  //   setTrainingStartDate(startDate);
  //   console.log`Setting training start date: ${startDate.toDateString()}`;
  //
  //   const datesResult = buildDateArray(startDate, enteredDate, dates);
  //   setDates(datesResult);
  // }

  // selectedRaceDate is a DayJS date
  function onChangeMUIDatePicker(selectedRaceDate) {
    console.log(`Selected race date ${selectedRaceDate.toString()}`);

    console.log(selectedRaceDate.year());

    // const [year, month, day] = selectedRaceDate.format("YYYY-MM-DD").split("-");
    // const enteredDate = new Date(year, month - 1, day); // This constructor uses the user's timezone, not UTC
    // console.log(`Entered Date: ${enteredDate}`);
    // console.log(`Entered Date.toDateString: ${enteredDate.toDateString()}`);

    setDates([]);
    // setRaceDate(clickedDate);
    setRaceDate(selectedRaceDate);

    // const calculatedTrainingStartDate = new Date(enteredDate);
    // calculatedTrainingStartDate.setDate(enteredDate.getDate() - 7 * 12);

    let calculatedTrainingStartDate = dayjs(selectedRaceDate).subtract(
      7 * 12,
      "day"
    );

    let calculatedTrainingStartDateTemp = calculatedTrainingStartDate.toDate();
    // Set start date to the first Monday after the start date.
    while (calculatedTrainingStartDateTemp.getDay() !== 1) {
      calculatedTrainingStartDateTemp.setDate(
        calculatedTrainingStartDateTemp.getDate() + 1
      );
    }

    calculatedTrainingStartDate = dayjs(calculatedTrainingStartDateTemp);

    setTrainingStartDate(calculatedTrainingStartDate);
    console.log`Setting training start date: ${calculatedTrainingStartDate.toString()}`;

    const datesResult = buildDateArray(
      calculatedTrainingStartDate.toDate(),
      selectedRaceDate.toDate(),
      dates
    );
    setDates(datesResult);
  }

  function tileContent({ activeStartDate, date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      //        if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      let foundDate = null;

      if (dates) {
        foundDate = dates.find((dateFromList) => {
          return dateFromList.date == date.toLocaleDateString();
        });
      }

      if (foundDate) {
        return (
          <div className="activity-content">
            {foundDate?.activity?.isRunIcon() && <img src={"run-black.svg"} />}
            {foundDate?.activity?.activityType === ActivityType.cross && (
              <img src={"cross-training-black.svg"} />
            )}
            {/*{foundDate?.activity?.activityType === ActivityType.rest && (*/}
            {/*  <img*/}
            {/*    width="15"*/}
            {/*    height="15"*/}
            {/*    src={foundDate?.activity.getRestIcon()}*/}
            {/*  />*/}
            {/*)}*/}

            <div className='activity-text' style={{marginTop: '10px', textAlign: 'left'}}>
              {foundDate?.activity?.toText()}
            </div>
          </div>
        );
      }

      if (raceDate && raceDate.isSame(dayjs(date), "day")) {
        return (
          <div className={"activity-content"}>
            <span style={{ color: "black" }}>Race day!</span>
            <img className="finish" src={"finish-black.svg"} />
          </div>
        );
      }
    }
  }

  function tileClassName({ activeStartDate, date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      //        if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      let foundDate = null;

      if (dates) {
        foundDate = dates.find((dateFromList) => {
          return dateFromList.date == date.toLocaleDateString();
        });
      }

      if (foundDate) {
        return "activity-day";
      }

      if (raceDate && raceDate.isSame(dayjs(date), "day")) {
        return "race-day";
      }
    }
  }

  return (
    <main>
      <span className={"text2"}>
        I&apos;m a ___ runner and I&apos;m running a ___.
      </span>
      {/*<input type="date" onChange={onChange} />*/}

      <br />

      <span className={"text2"}>
        My race date is {" "}
      </span>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={raceDate}
          onChange={(newValue) => {
            onChangeMUIDatePicker(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <br />
      {/*Race date: {raceDate && raceDate.toLocaleDateString()} <br />*/}
      {/*Training start date:{" "}*/}
      {/*{trainingStartDate && trainingStartDate.toLocaleDateString()} <br />*/}

      {/*Takes a Date*/}
      {/*In most cases, we recommend using controlled components to implement forms.*/}
      <Calendar
        className={"schedule"}
        // value={trainingStartDate.toDate()} // Takes Date
        // minDate={trainingStartDate.toDate()}
        // The beginning of a period that shall be displayed.
        defalutActiveStartDate={trainingStartDate.toDate()} // Takes Date.  default makes the calendar scrollable
        tileContent={tileContent}
        // tileContent={tileContent({ dates, raceDate })}
        tileClassName={tileClassName}
        maxDetail="month"
        minDetail="month"
        // calendarType="US"
      />
      {/*{trainingStartDate && trainingStartDate.toLocaleDateString()}*/}
      {/*{trainingStartDate.toString()}*/}
      <Button variant="contained" onClick={saveIcs}>
        Download calendar file
      </Button>
    </main>
  );
}

export default App;
