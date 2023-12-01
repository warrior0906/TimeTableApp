import moment from 'moment';

export const fetchInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('');
};

/**
 *
 * @param date = timestamp
 * @returns the week for the selected date in "YYYY-MM-DD" format
 * from SUN - SAT.
 */
export const getCurrentWeek = (date?: number) => {
  let curr = date ? new Date(date) : new Date();
  let week = [];

  for (let i = 0; i < 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }

  console.log('curr', curr, new Date(), date);
  console.log('week', week);

  return week;
};

export const getWeek = (week: Array<string>) => {
  const sunday = moment(week[0]).format('DD MMM');
  const saturday = moment(week[6]).format('DD MMM');
  return `${sunday} - ${saturday}`;
};
