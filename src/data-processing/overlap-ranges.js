import 'ramda'

const employeOne = {
  name: 'Diana',
  workHistory: [
    {
      from: '01-2015',
      to: '02-2016'
    },
    {
      from: '05-2015',
      to: '05-2016'
    },
    {
      from: '12-2015',
      to: '01-2016'
    },
    {
      from: '08-2016',
      to: '07-2017'
    },
    {
      from: '06-2016',
      to: '07-2017'
    }
  ]
}

const employeTwo = {
  name: 'Justin',
  workHistory: [
    {
      from: '01-2015',
      to: '01-2016'
    },
    {
      from: '06-2015',
      to: '06-2017'
    },
    {
      from: '01-2017',
      to: '01-2018'
    },
  ]
}

const employees = [ employeOne, employeTwo ]
