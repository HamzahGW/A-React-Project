export function convertHijriDate(date: Date) {
  const format = new Intl.DateTimeFormat("en-u-ca-islamic-nu-latn", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const hijriBirthDate = format.format(date).split("/");
  const reverseDate =
    hijriBirthDate[1] +
    "-" +
    hijriBirthDate[0] +
    "-" +
    hijriBirthDate[2].split(" ")[0];
  return reverseDate;
}

export function convertHijriBirthDate(date: Date) {
  const format = new Intl.DateTimeFormat("en-u-ca-islamic-nu-latn", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const hijriBirthDate = format.format(date).split("/");
  const reverseDate = hijriBirthDate[2].split(" ")[0] + "-" + hijriBirthDate[0];
  return reverseDate;
}

export function getNumberOfDaysLeft(end: string) {
  if (!end) return "";
  const date1 = new Date();
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

export function calculateMinMaxBirthDate(date: Date) {
  const currentYear = date.getFullYear();
  const maxDate = new Date(currentYear - 18 + "/1/1");
  const minDate = new Date(currentYear - 100 + "/1/1");
  return {
    minDate,
    maxDate,
  };
}

export function calculateYearFromToday(date: Date, to: number) {
  const currentYear = date.getFullYear();
  return new Date(currentYear + to + "/1/1");
}

export function convertTimestampToDateString(date: string) {
  if (!date) return { date: "", time: "" };
  const dateFormat = new Date(date);
  return {
    date: `${dateFormat.getDate()}/${dateFormat.getMonth() + 1
      }/${dateFormat.getFullYear()}`,
    time: `${dateFormat.getHours()}:${dateFormat.getMinutes()}`,
  };
}

export function getDiffHours(dt1: Date, dt2: Date) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
}

export function getMonYearDay(date: string): string {
  if (!date) return "";
  const dateFormat = new Date(date);
  return `${dateFormat.getDate()}/${dateFormat.getMonth() + 1
    }/${dateFormat.getFullYear()}`;
}

// will return this format "Jan 21, 2023 • 10:11AM"
export function prettifyTimestamp(date: string) {
  if (!date) return "";
  const dateFormat = new Date(date);
  const monthDayYear = dateFormat.toLocaleDateString("default", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const hourMin = dateFormat.toLocaleDateString("default", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${monthDayYear} • ${hourMin.split(",")[1]}`;
}

export function convertDateToYMD(date: Date) {
  if (!date) return undefined;
  const formattedDate = date.toLocaleDateString().slice(0, 10).replace(/-/g, '/');
  return formattedDate;
}
