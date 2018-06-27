import 'ramda'

const messages = [
  { author: 'Diana', msg: 'Hello guys, how you doooin?',
    date: new Date(2018, 6, 27, 10, 24), },

  { author: 'Jake', msg: `I'm doing great!`,
    date: new Date(2018, 6, 27, 10, 25, 21), },

  { author: 'Maria', msg: `Well, I'd like a cookie :(`,
    date: new Date(2018, 6, 27, 10, 29, 30), },
]
const addFieldSinceNow = x=> ({...x,sinceNow:null})

var mappedMessages = messages.map(addFieldSinceNow)

  const currentDate = new Date();
  const messagesWithDateInfo = messages.map(
    x => (
      { ...x,
         year: x.date.getFullYear(),
         month: x.date.getMonth(), 
         monthDay: x.date.getDate() }
    ))
messagesWithDateInfo.map(
  x => ({ ...x, sameYear: x.year == currentDate.getFullYear() }))
