import {
  CrossTrainingActivities,
  FridayActivities,
  LongRunActivities,
  PaceActivities,
  PaceAndTempActivities,
  ShortRunActivities,
  ShortRunIncreasingActivities,
} from "./weeks";

export function getActivitiesForDay(day, week) {
  let activities = null;

  // day = (day + 1) % 7; // Long runs on Saturdays

  if (day === 1) {
    activities = CrossTrainingActivities;
  } else if (day === 2) {
    activities = ShortRunIncreasingActivities;
  } else if (day === 3) {
    activities = PaceAndTempActivities;
  } else if (day === 4) {
    activities = ShortRunActivities;
  } else if (day === 5) {
    activities = FridayActivities;
  } else if (day === 6) {
    activities = PaceActivities;
  } else if (day === 0) {
    activities = LongRunActivities;
  }

  if (activities) {
    return activities.find((activity) => {
      return activity.week === week;
    });
  }
}

export function buildDateArray(startDate, clickedDate, dates) {
  let week = 1;
  let day = 1;

  // const datesResult = [...dates]; // Why are we adding? Don't we always start with an empty array?
  const datesResult = [];

  const currentDate = new Date(startDate);

  while (currentDate < clickedDate) {
    datesResult.push({
      date: currentDate.toLocaleDateString(),
      activity: getActivitiesForDay(day, week)?.activity,
    });

    currentDate.setDate(currentDate.getDate() + 1);

    day++;

    if (currentDate.getDay() == 0) {
      week++;
      day = 0;
    }
  }

  console.log(JSON.stringify(datesResult));
  return datesResult;
  // setDates(dates);
}
