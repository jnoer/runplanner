/* eslint-disable react/prop-types */
import { ActivityType } from "./ActivityType";
import { React } from "react";

export default function tileContent(dates, raceDate) {
  // eslint-disable-next-line react/display-name
  return ({ actziveStartDate, date, view }) => {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      //        if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      let foundDate = null;

      if (dates && dates.size > 0) {
        foundDate = dates.find((dateFromList) => {
          return dateFromList.date == date.toLocaleDateString();
        });
      }

      if (foundDate) {
        return (
          <div className={"activity-content"}>
            {foundDate?.activity?.isRunIcon() && <img src={"run-green.svg"} />}
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
            {foundDate?.activity?.toComponent()}
          </div>
        );
      }

      if (
        raceDate &&
        raceDate.toLocaleDateString() == date.toLocaleDateString()
      ) {
        return (
          <div className={"activity-content"}>
            <span style={{ color: "black" }}>Race day!</span>
            <img src={"finish-black.svg"} />
          </div>
        );
      }
    }
  };
}
