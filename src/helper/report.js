import _ from 'lodash';
import { getLocalStorage, LOCAL_STORAGE_KEY } from '@/helper/localStorage';

export const getBeforeDayByN = (n = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const day = _.padStart(date.getDate(), 2, '0');
  const month = _.padStart(date.getMonth() + 1, 2, '0');
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

export const mergeHistoryWithLocalStorage = () => {
  const template = getWeekHistory();

  const data = getLocalStorage(LOCAL_STORAGE_KEY.HISTORY_REPORT);

  if (!data) return template;

  const dataByDate = _.keyBy(data, 'x');

  return template.map(item => {
    if (dataByDate[item.x]) {
      return {
        ...item,
        y: dataByDate[item.x].y
      };
    }
    return item;
  });
};
