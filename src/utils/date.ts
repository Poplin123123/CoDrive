interface Date {
  date: string;
  startTime: string;
}

function compareProducts(a: Date, b: Date) {
  const dateA = new Date(`${a.date} ${a.startTime}`);
  const dateB = new Date(`${b.date} ${b.startTime}`);

  if (dateA < dateB) {
    return -1;
  }
  if (dateA > dateB) {
    return 1;
  }
  // If dates are equal, compare start times
  const timeA = new Date(`1970/01/01 ${a.startTime}`);
  const timeB = new Date(`1970/01/01 ${b.startTime}`);
  return timeA.getTime() - timeB.getTime();
}

export { compareProducts };
