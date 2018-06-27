import 'ramda'

const messages = [
  { author: 'Diana', msg: 'Hello guys, how you doooin?',
    date: new Date(2018, 6, 27, 10, 24), },

  { author: 'Jake', msg: `I'm doing great!`,
    date: new Date(2018, 6, 27, 10, 25, 21), },

  { author: 'Maria', msg: `Well, I'd like a cookie :(`,
    date: new Date(2018, 6, 27, 10, 29, 30), },
]

const currentDate = new Date();

messages.map((x) => {
    return {...x,
        year: x.date.getFullYear(),
        month: x.date.getMonth(),
        monthDay: x.date.getDate(),
    };
}).map((x) => {
  return {
      ...x,
      isTheSameYear: x.year === currentDate.getFullYear(),
      isTheSameMonth: x.month === currentDate.getMonth(),
      isTheSameMonthDay: x.monthDay === currentDate.getDate(),
  }
});