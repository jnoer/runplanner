// pace is 5k or nothing.
import { React } from "react";
import ActivityType from "./ActivityType";

const distanceUnit = "mi";

export default class Activity {
  constructor({ activityType, distance, reps, pace, time }) {
    this.activityType = activityType;
    this.distance = distance;
    // this.distanceUnit = distanceUnit;
    this.reps = reps;
    this.pace = pace;
    this.time = time;
  }

  // toComponent() {
  //   return <>{this.toText()}</>;
  // }

  toText() {
    if (this.activityType === ActivityType.rest) {
      return ActivityType.rest;
    }

    if (this.activityType === ActivityType.run) {
      return `${this.distance} ${distanceUnit} ${this.activityType}`;
    }

    if (this.activityType === ActivityType.cross) {
      return `${this.time} min ${this.activityType}`;
    }

    if (this.activityType === ActivityType.interval) {
      return `${this.reps} x ${this.distance} 5K pace`;
    }

    if (this.activityType === ActivityType.pace) {
      return `${this.distance} ${distanceUnit} ${this.activityType}`;
    }

    if (this.activityType === ActivityType.tempo) {
      return `${this.time} min ${this.activityType}`;
    }
  }

  isRunIcon() {
    return (
      this.activityType === ActivityType.run ||
      this.activityType === ActivityType.tempo ||
      this.activityType === ActivityType.pace ||
      this.activityType === ActivityType.interval
    );
  }

  getRestIcon() {
    return "burger.svg";

    // const choice = Math.floor(Math.random() * 3);
    //
    // if (choice === 0) {
    //   return "pizza.svg";
    // } else if (choice === 1) {
    //   return "burger.svg";
    // } else {
    //   return "hot-dog.svg";
    // }
  }
}
