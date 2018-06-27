import 'ramda'

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
};

const stringToDate = (date) => {
  const [month, year] = date.split('-');
  return new Date(Number(year), Number(month) - 1);
};

const interfere = (first, second) => {
  if ((!first) || (!first.to)) {
    return false;
  }
  return first.to.getTime()
      >=
      second.from.getTime();
};

employeTwo
    .workHistory
    .map(({from, to}) => {
      return {
        from: stringToDate(from),
        to: stringToDate(to),
      }
    })
    .sort((a, b) => {
      return a.from.getTime() > b.from.getTime();
    })
    .reduce((acc, currentValue) => {
      if (interfere(acc[acc.length - 1], currentValue)) {
         acc[acc.length-1].to = currentValue.to;
      }
      else {
          acc.push(currentValue);
      }
      return acc;
    }, []);



const employees = [ employeOne, employeTwo ]
