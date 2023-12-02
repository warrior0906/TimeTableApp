export const getData = (selectedWeek: Array<string>) =>
  selectedWeek.map((date: string) => {
    return {
      date: date,
      schedule: [
        //we can change the schedule as per requirement, here using same for now
        {subj: 'Math', time: '08:00 - 08: 20'},
        {subj: 'Hindi', time: '08:30 - 09: 00'},
        {subj: 'Eng', time: '09:00 - 09: 20'},
      ],
    };
  });

// export const getData = (selectedWeek: Array<string>) => [
//   {
//     date: selectedWeek[1],
//     schedule: [
//       {subj: 'Math', time: '08:00 - 08: 20'},
//       {subj: 'Hindi', time: '08:30 - 09: 00'},
//       {subj: 'Eng', time: '09:00 - 09: 20'},
//     ],
//   },
//   {
//     date: selectedWeek[2],
//     schedule: [
//       {subj: 'Cvs', time: '08:00 - 08: 20'},
//       {subj: 'Art', time: '08:30 - 09: 00'},
//       {subj: 'Math', time: '09:00 - 09: 20'},
//     ],
//   },
//   {
//     date: selectedWeek[3],
//     schedule: [
//       {subj: 'Geo', time: '08:00 - 08: 20'},
//       {subj: 'Hindi', time: '08:30 - 09: 00'},
//       {subj: 'Bio', time: '09:00 - 09: 20'},
//     ],
//   },

//   {
//     date: selectedWeek[4],
//     schedule: [
//       {subj: 'Hindi', time: '08:00 - 08: 20'},
//       {subj: 'Cvs', time: '08:30 - 09: 00'},
//       {subj: 'Eng', time: '09:00 - 09: 20'},
//     ],
//   },
//   {
//     date: selectedWeek[5],
//     schedule: [
//       {subj: 'Math', time: '08:00 - 08: 20'},
//       {subj: 'Bio', time: '08:30 - 09: 00'},
//       {subj: 'History', time: '09:00 - 09: 20'},
//     ],
//   },
//   {
//     date: selectedWeek[6],
//     schedule: [
//       {subj: 'Geo', time: '08:00 - 08: 20'},
//       {subj: 'Bio', time: '08:30 - 09: 00'},
//       {subj: 'Art', time: '09:00 - 09: 20'},
//     ],
//   },
// ];
