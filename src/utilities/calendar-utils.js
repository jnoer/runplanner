import {
  CrossTrainingActivities,
  RestActivities,
  LongRunActivities,
  PaceActivities,
  PaceAndTempActivities,
  ShortRunActivities,
  ShortRunIncreasingActivities,
} from "../data-half-marathon";
import dayjs from "dayjs";

const ActivityCategory = {
  rest: RestActivities,
  shortRun: ShortRunActivities,
  miniRun: ShortRunIncreasingActivities,
  cross: CrossTrainingActivities,
  pace: PaceActivities,
  interval: PaceAndTempActivities,
  longRun: LongRunActivities
}

// TODO: put this in context so that we can access it in Table.js.
//  In the table, the user will be able to move a category to a different day.
let activityMapping = {
  1: ActivityCategory.cross,
  2: ActivityCategory.shortRun,
  3: ActivityCategory.pace,
  4: ActivityCategory.interval,
  5: ActivityCategory.rest,
  6: ActivityCategory.pace,
  0: ActivityCategory.longRun
}

export const getTrainingStartDate = (selectedRaceDate) => {
  const calculatedTrainingStartDate = dayjs(selectedRaceDate).subtract(
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

  return dayjs(calculatedTrainingStartDateTemp);
}

export function getActivitiesForDay(dayOfWeek, week) {
  let activities = null;

  // day = (day + 1) % 7; // Long runs on Saturdays

  // TODO: Do mapping with activityMapping

  activities = activityMapping[dayOfWeek];

  // if (dayOfWeek === 1) { // 1 == Monday
  //   activities = CrossTrainingActivities;
  // } else if (dayOfWeek === 2) {
  //   activities = ShortRunIncreasingActivities;
  // } else if (dayOfWeek === 3) {
  //   activities = PaceAndTempActivities;
  // } else if (dayOfWeek === 4) {
  //   activities = ShortRunActivities;
  // } else if (dayOfWeek === 5) {
  //   activities = RestActivities;
  // } else if (dayOfWeek === 6) {
  //   activities = PaceActivities;
  // } else if (dayOfWeek === 0) {
  //   activities = LongRunActivities;
  // }

  if (activities) {
    return activities.find((activity) => {
      return activity.week === week;
    });
  }
}

export function buildDateArray(startDate, clickedDate, dates) {
  let week = 1;
  let dayOfWeek = 1; // 1 = Monday

  const datesResult = [];

  const currentDate = new Date(startDate);

  while (currentDate < clickedDate) {
    datesResult.push({
      date: currentDate.toLocaleDateString(),
      activity: getActivitiesForDay(dayOfWeek, week)?.activity,
    });

    currentDate.setDate(currentDate.getDate() + 1);

    dayOfWeek++;

    if (currentDate.getDay() == 0) { // 0 == Sunday
      week++;
      dayOfWeek = 0;
    }
  }

  console.log(JSON.stringify(datesResult));
  return datesResult;
  // setDates(dates);
}
