export const getBeforeDayByN = (n = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const getWeekHistory = () => {
  return [
    { x: getBeforeDayByN(6), y: 0 },
    { x: getBeforeDayByN(5), y: 0 },
    { x: getBeforeDayByN(4), y: 0 },
    { x: getBeforeDayByN(3), y: 0 },
    { x: getBeforeDayByN(2), y: 0 },
    { x: getBeforeDayByN(1), y: 0 },
    { x: getBeforeDayByN(0), y: 0 }
  ];
};
