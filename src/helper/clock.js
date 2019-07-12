import { TICK_TOCK } from '@/stores/constants/mutation-types';
import { FINISH_COUNT_DOWN } from '@/stores/constants/actions';

let interval = null;

export const startClock = (commit, dispatch, state) => {
  if (interval) clearInterval(interval);
  let count = 0;
  let total = state.countDown;
  interval = setInterval(() => {
    // console.log(count, state.countDown, total);
    commit(TICK_TOCK);
    count++;
    if (count === total) {
      // console.log('same');
      clearInterval(interval);
      dispatch(FINISH_COUNT_DOWN);
      return false;
    }
  }, 1000);
};

export const stopClock = () => {
  if (interval) {
    clearInterval(interval);
  }
};
