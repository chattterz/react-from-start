
// import 'ramda'
// import isPresentYear from './isPresentYear'

const isPresentYear = function(date){
  return (new Date().getFullYear() - date.getFullYear()) === 0
}

const isPresentMonth = function(date){
  return ((new Date().getMonth() - date.getMonth()) === 0)
}

const isPresentDay = function(date){
  return ((new Date().getDate() - date.getDate()) === 0)
}

import 'ramda'


const messages = [
  { author: 'Diana', msg: 'Hello guys, how you doooin?',
    date: new Date(2018, 6, 27, 10, 24), },

  { author: 'Jake', msg: `I'm doing great!`,
    date: new Date(2018, 6, 27, 10, 25, 21), },

  { author: 'Maria', msg: `Well, I'd like a cookie :(`,
    date: new Date(2018, 6, 27, 10, 29, 30), },

];

const messagesWithSince = messages.map(message => ({
  ...message,
  isPresentYear: isPresentYear(message.date),
  isPresentMonth: isPresentMonth(message.date),
  isPresentDay: isPresentDay(message.date)
}))
console.log(messagesWithSince)

