import Activity from "./Activity";
import ActivityType from "./ActivityType";

// These are split into activities so that we can easily move the activity column in a table
export const CrossTrainingActivities = [
  {
    week: 1,
    activity: new Activity({ activityType: ActivityType.cross, time: 30 }),
  },
  {
    week: 2,
    activity: new Activity({ activityType: ActivityType.cross, time: 30 }),
  },
  {
    week: 3,
    activity: new Activity({ activityType: ActivityType.cross, time: 40 }),
  },
  {
    week: 4,
    activity: new Activity({ activityType: ActivityType.cross, time: 40 }),
  },
  {
    week: 5,
    activity: new Activity({ activityType: ActivityType.cross, time: 40 }),
  },
  {
    week: 6,
    activity: new Activity({ activityType: ActivityType.cross, time: 50 }),
  },
  {
    week: 7,
    activity: new Activity({ activityType: ActivityType.rest }),
  },
  {
    week: 8,
    activity: new Activity({ activityType: ActivityType.cross, time: 50 }),
  },
  {
    week: 9,
    activity: new Activity({ activityType: ActivityType.cross, time: 60 }),
  },
  {
    week: 10,
    activity: new Activity({ activityType: ActivityType.rest }),
  },
  {
    week: 11,
    activity: new Activity({ activityType: ActivityType.cross, time: 60 }),
  },
  {
    week: 12,
    activity: new Activity({ activityType: ActivityType.rest }),
  },
];

export const ShortRunIncreasingActivities = [
  {
    week: 1,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 2,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 3,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3.5,
    }),
  },
  {
    week: 4,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3.5,
    }),
  },
  {
    week: 5,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 4,
    }),
  },
  {
    week: 6,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 4,
    }),
  },
  {
    week: 7,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 4.5,
    }),
  },
  {
    week: 8,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 4.5,
    }),
  },
  {
    week: 9,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 5,
    }),
  },
  {
    week: 10,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 5,
    }),
  },
  {
    week: 11,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 5,
    }),
  },
  {
    week: 12,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 4,
    }),
  },
];

export const PaceAndTempActivities = [
  {
    week: 1,
    activity: new Activity({
      activityType: ActivityType.interval,
      distance: 400,
      reps: 5,
    }),
  },
  {
    week: 2,
    activity: new Activity({
      activityType: ActivityType.tempo,
      time: 30,
    }),
  },
  {
    week: 3,
    activity: new Activity({
      activityType: ActivityType.interval,
      distance: 400,
      reps: 6,
    }),
  },
  {
    week: 4,
    activity: new Activity({
      activityType: ActivityType.tempo,
      time: 35,
    }),
  },
  {
    week: 5,
    activity: new Activity({
      activityType: ActivityType.interval,
      distance: 400,
      reps: 7,
    }),
  },
  {
    week: 6,
    activity: new Activity({
      activityType: ActivityType.tempo,
      time: 40,
    }),
  },
  {
    week: 7,
    activity: new Activity({
      activityType: ActivityType.interval,
      distance: 400,
      reps: 8,
    }),
  },
  {
    week: 8,
    activity: new Activity({
      activityType: ActivityType.tempo,
      time: 40,
    }),
  },
  {
    week: 9,
    activity: new Activity({
      activityType: ActivityType.interval,
      distance: 400,
      reps: 9,
    }),
  },
  {
    week: 10,
    activity: new Activity({
      activityType: ActivityType.tempo,
      time: 45,
    }),
  },
  {
    week: 11,
    activity: new Activity({
      activityType: ActivityType.interval,
      distance: 400,
      reps: 10,
    }),
  },
  {
    week: 12,
    activity: new Activity({
      activityType: ActivityType.tempo,
      time: 30,
    }),
  },
];

export const ShortRunActivities = [
  {
    week: 1,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 2,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 3,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 4,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 5,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 6,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 7,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 8,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 9,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 10,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 11,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 12,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
];

export const RestActivities = [
  {
    week: 1,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 2,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 3,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 4,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 5,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 6,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 7,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 8,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 9,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 10,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 11,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
  {
    week: 12,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
];

export const PaceActivities = [
  {
    week: 1,
    activity: new Activity({
      activityType: ActivityType.pace,
      distance: 3,
    }),
  },
  {
    week: 2,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 3,
    activity: new Activity({
      activityType: ActivityType.pace,
      distance: 3,
    }),
  },
  {
    week: 4,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 5,
    activity: new Activity({
      activityType: ActivityType.pace,
      distance: 3,
    }),
  },
  {
    week: 6,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 3,
    }),
  },
  {
    week: 7,
    activity: new Activity({
      activityType: ActivityType.pace,
      distance: 4,
    }),
  },
  {
    week: 8,
    activity: new Activity({
      activityType: ActivityType.pace,
      distance: 5,
    }),
  },
  {
    week: 9,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 5,
    }),
  },
  {
    week: 10,
    activity: new Activity({
      activityType: ActivityType.pace,
      distance: 5,
    }),
  },
  {
    week: 11,
    activity: new Activity({
      activityType: ActivityType.pace,
      distance: 3,
    }),
  },
  {
    week: 12,
    activity: new Activity({
      activityType: ActivityType.rest,
    }),
  },
];

export const LongRunActivities = [
  {
    week: 1,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 5,
    }),
  },
  {
    week: 2,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 6,
    }),
  },
  {
    week: 3,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 6,
    }),
  },
  {
    week: 4,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 7,
    }),
  },
  {
    week: 5,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 8,
    }),
  },
  {
    week: 6,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 8,
    }),
  },
  {
    week: 7,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 9,
    }),
  },
  {
    week: 8,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 10,
    }),
  },
  {
    week: 9,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 10,
    }),
  },
  {
    week: 10,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 11,
    }),
  },
  {
    week: 11,
    activity: new Activity({
      activityType: ActivityType.run,
      distance: 12,
    }),
  },
];
