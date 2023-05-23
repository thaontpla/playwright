import dayjs from "dayjs";
import type { UnitType, ManipulateType } from "dayjs";

export type DateConfigType = string | number | Date;
export type DateUnitType = UnitType;
export type DateManipulateType = ManipulateType;

/**
 * Add the specified number of unit to the given date.
 * @param value
 * @param date
 * @param unit
 */
export const addDate = (
  value: number,
  date?: DateConfigType,
  unit: DateManipulateType = "day"
): Date => dayjs(date).add(value, unit).toDate();

/**
 * Add the specified number of minutes to the given date.
 * @param value
 * @param date
 */
export const addMinutes = (value: number, date?: DateConfigType): Date =>
  addDate(value, date, "minutes");

/**
 * Add the specified number of hours to the given date.
 * @param value
 * @param date
 */
export const addHours = (value: number, date?: DateConfigType): Date =>
  addDate(value, date, "hours");

/**
 * Add the specified number of days to the given date.
 * @param value
 * @param date
 */
export const addDays = (value: number, date?: DateConfigType): Date =>
  addDate(value, date, "days");

/**
 * Add the specified number of months to the given date.
 * @param value
 * @param date
 */
export const addMonths = (value: number, date?: DateConfigType): Date =>
  addDate(value, date, "months");

/**
 * Add the specified number of years to the given date.
 * @param value
 * @param date
 */
export const addYears = (value: number, date?: DateConfigType): Date =>
  addDate(value, date, "years");

/**
 * Format the date
 * @param value
 * @param format
 */
export const formatDate = (value: DateConfigType, format: string): string => {
  const date = typeof value === "number" ? value * 1000 : value;
  return dayjs(date).format(format);
};

/**
 * Get the seconds timestamp of the given date.
 * @param date
 */
export const getUnixTime = (date?: DateConfigType): number =>
  dayjs(date).valueOf();

/**
 * Get the day of the month of the given date.
 * @param date
 * @param unit
 */
export const getDate = (
  date?: DateConfigType,
  unit: DateUnitType = "day"
): number => dayjs(date).get(unit);

/**
 * Get the hours of the given date.
 * @param date
 */
export const getHours = (date?: DateConfigType): number =>
  getDate(date, "hour");

/**
 * Get the minutes of the given date.
 * @param date
 */
export const getMinutes = (date?: DateConfigType): number =>
  getDate(date, "minute");

/**
 * Get the seconds of the given date.
 * @param date
 */
export const getSeconds = (date?: DateConfigType): number =>
  getDate(date, "second");

/**
 * Get the number of full unit periods between two dates.
 * @param dateLeft
 * @param dateRight
 * @param unit
 */
export const differenceInDate = (
  dateLeft: DateConfigType,
  dateRight: DateConfigType,
  unit: DateUnitType
): number => {
  return dayjs(dateLeft).diff(dateRight, unit);
};

/**
 * Get the number of full day periods between two dates.
 * @param dateLeft
 * @param dateRight
 */
export const differenceInDays = (
  dateLeft: DateConfigType,
  dateRight: DateConfigType
): number => {
  return differenceInDate(dateLeft, dateRight, "days");
};

/**
 * Get the number of full hour periods between two dates.
 * @param dateLeft
 * @param dateRight
 */
export const differenceInHours = (
  dateLeft: DateConfigType,
  dateRight: DateConfigType
): number => {
  return differenceInDate(dateLeft, dateRight, "hours");
};

/**
 * Get if two dates is same day or not.
 * @param value
 * @param compareValue
 */
export const isSameDay = (value: number, compareValue?: number): boolean => {
  return dayjs(value).isSame(dayjs(compareValue), "day");
};
/**
 * Calculate days between two date excluding weekends
 * @param fromDate
 * @param numberOfDay
 */
export function calculateTimeIncludeWeekendDays(
  fromDate: Date,
  numberOfDay: number
): number {
  let numberOfDayIncludeWeekend = 0;
  let currentDay = fromDate;
  while (numberOfDay > 0) {
    numberOfDayIncludeWeekend++;
    numberOfDay--;
    currentDay = addDays(1, currentDay);
    numberOfDay += currentDay.getDay() == 6 || currentDay.getDay() == 0 ? 1 : 0;
  }
  return numberOfDayIncludeWeekend;
}

/**
 * Convert timestamp to date time with format 'Jun 13, 2022 11:19 AM'
 *
 * * */

export const convertUnixToDate = (
  unixTimestamp,
  withSurFix = true,
  format24h = false
) => {
  // convert unix timestamp to milliseconds
  const timeDate = unixTimestamp ? unixTimestamp * 1000 : 0;

  try {
    const now: Date = new Date();
    const dateObject: Date = new Date(timeDate);
    const timeDiff = now.valueOf() - dateObject.valueOf();
    if (timeDiff <= 60000) {
      return "Just now";
    } else if (timeDiff > 60000 && timeDiff <= 60000 * 60) {
      const minutesDiff = Math.round(timeDiff / 60000);
      return `${minutesDiff} ${minutesDiff > 1 ? "minutes" : "minute"} ago`;
    } else if (timeDiff > 60000 * 60 && timeDiff <= 60000 * 60 * 24) {
      const hoursDiff = Math.round(timeDiff / (60000 * 60));
      return `${hoursDiff} ${hoursDiff > 1 ? "hours" : "hour"} ago`;
    }

    const year = dateObject.getFullYear();
    const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    const monthString = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    const date = ("0" + dateObject.getDate()).slice(-2);
    let hours = ("0" + dateObject.getHours()).slice(-2);
    const minutes = ("0" + dateObject.getMinutes()).slice(-2);
    let surFix12h = "";
    // const seconds = ('0' + date_ob.getSeconds()).slice(-2)
    if (!format24h) {
      surFix12h = parseInt(hours, 10) >= 12 ? "PM" : "AM";
      hours = (+hours % 12).toString();
    }
    if (withSurFix) {
      return `${monthString[month]} ${date}, ${year} ${hours}:${minutes} ${surFix12h}`;
    }

    return `${date}-${month}-${year}`;
  } catch (e) {
    return new Date().toLocaleDateString();
  }
};

/**
 * Format date to format Aug 11, 2022
 * @param date
 * @returns <string> date after format: Aug 11, 2022
 */
export const convertDate = (date: string | number): string => {
  const createDate = new Date(date).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return createDate;
};
