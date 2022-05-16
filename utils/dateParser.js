const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function dateParser(day, month, year) {
  return `${day} ${MONTH[month - 1]} ${year}`;
}
