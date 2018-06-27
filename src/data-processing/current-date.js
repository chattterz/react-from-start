import 'ramda'

const messages = [
  { author: 'Diana', msg: 'Hello guys, how you doooin?',
    date: new Date(2018, 6, 27, 10, 24), },

  { author: 'Jake', msg: `I'm doing great!`,
    date: new Date(2018, 6, 27, 10, 25, 21), },

  { author: 'Maria', msg: `Well, I'd like a cookie :(`,
    date: new Date(2018, 6, 27, 10, 29, 30), },
]

let currentDate  = new Date()

messages.map(x => ({
    ...x,
    currentYear: x.date.getFullYear(),
    currentMonth: x.date.getMonth(),
    currentDay: x.date.getDate(),
})).map(x => ({
    ...x,
    isSameYear: x.date.getFullYear() === currentDate.getFullYear(),
    isSameMonth: x.date.getMonth() === currentDate.getMonth(),
    isSameDay: x.date.getDate() === currentDate.getDate(),
}));
