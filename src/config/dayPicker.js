export const MODIFIERS = {
  weekend: { daysOfWeek: [0, 6] },
  bankHolidays: new Date(2019, 0, 1),
  holidays: {
    from: new Date(2019, 0, 30),
    to: new Date(2019, 0, 31),
  }
};

export const STYLE = {
  holidays: {
    color: 'white',
    backgroundColor: '#AA0'
  },
  bankHolidays: {
    color: 'white',
    backgroundColor: 'red'
  },
  weekend: {
    color: 'red',
    backgroundColor: 'white'
  }
};
