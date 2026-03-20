import moment from "moment-timezone";

export const timezoneValueFormatter = (userTimeZone: string) => (params: any) => {
  const value = params.value;
  if (!value) {
    return "";
  }
  const formatted = moment.utc(value).tz(userTimeZone).format("YYYY-MM-DD HH:mm:ss");
  return formatted;
};

export const getTimeZoneAbbr = () => {
  const timeZoneAbbr = moment.tz(moment.tz.guess()).format("z");
  return timeZoneAbbr || "UTC";
};

export const shortTimeDispaly = (time: string, userTimeZone: string) => {
  if (!time) {
    return "";
  }
  const userTime = moment.utc(time).tz(userTimeZone);
  const currentTime = moment.tz(userTimeZone);
  let format = "YYYY-MM-DD HH:mm:ss";
  //same day
  // currentTime.diff(userTime, "days") === 0 doenst work as expected; yesterday within 24 hours will show diff as 0.
  if (
    currentTime.dayOfYear() === userTime.dayOfYear() &&
    currentTime.diff(userTime, "days") === 0
  ) {
    format = "HH:mm:ss";
  } else if (currentTime.year() === userTime.year()) {
    //same year
    format = "MMM DD HH:mm:ss";
  }

  return userTime.format(format);
};

export const nowInMicroseconds = () => {
  const millis = Date.now();
  const highRes = performance.now() % 1; // fractional milliseconds
  return Math.floor((millis + highRes) * 1000);
};
