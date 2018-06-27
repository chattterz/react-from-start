import 'ramda'

const messages = [
  { author: 'Diana', msg: 'Hello guys, how you doooin?',
    date: new Date(2018, 6, 27, 10, 24), },

  { author: 'Jake', msg: `I'm doing great!`,
    date: new Date(2018, 6, 27, 10, 25, 21), },

  { author: 'Maria', msg: `Well, I'd like a cookie :(`,
    date: new Date(2018, 6, 27, 10, 29, 30), },
]

var currentDate = new Date();

var messagesWithDateInfo = messages.map(
  (element) => ({
    ...element, 
    year: element.date.getFullYear(), 
    month: element.date.getMonth() + 1, 
    day: element.date.getDate() 
  })
)
.map(
  element => ({
    ...element, 
    isYearOK: () => currentDate.getFullYear() === element.year,
    isMonthOK: () => currentDate.getMonth() === element.month,
    isDayOK: () => currentDate.getDate() === element.day
  })
);
