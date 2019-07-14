import { TICK_TOCK } from '@/stores/constants/mutation-types';
import {
  ADD_TOMATO_ON_CURRENT,
  FINISH_COUNT_DOWN
} from '@/stores/constants/actions';

let interval = null;

export const startClock = (commit, dispatch, state) => {
  if (interval) clearInterval(interval);
  let count = 0;
  let total = state.countDown;
  let isWorking = state.isWorking;
  interval = setInterval(() => {
    // console.log(count, state.countDown, total);
    commit(TICK_TOCK);
    count++;
    if (count === total) {
      // console.log('same');
      clearInterval(interval);
      dispatch(FINISH_COUNT_DOWN);
      console.log(isWorking, state.isWorking);
      if (isWorking) {
        dispatch(ADD_TOMATO_ON_CURRENT);
      }
      return false;
    }
  }, 1000);
};

export const stopClock = () => {
  if (interval) {
    clearInterval(interval);
  }
};
