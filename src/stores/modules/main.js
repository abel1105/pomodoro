import {
  SET_TIME,
  TICK_TOCK,
  TOGGLE_IS_DEBUG,
  TOGGLE_IS_PLAYING,
  TOGGLE_IS_WORKING
} from '@/stores/constants/mutation-types';
import {
  FINISH_COUNT_DOWN,
  PLAY_OR_STOP,
  START_COUNT_DOWN,
  STOP_COUNT_DOWN
} from '@/stores/constants/actions';
import { startClock, stopClock } from '@/helper/clock';

const main = {
  state: {
    total: 25 * 60, // minutes
    countDown: 25 * 60, // minutes
    isWorking: true, // countdown minutes 25 or 5
    isPlaying: false, // time start or stop
    isDebug: false,
    work: 25 * 60,
    break: 5 * 60
  },
  getters: {
    undonePercentage(state) {
      return (state.countDown / state.total) * 100;
    },
    donePercentage(state) {
      return ((state.total - state.countDown) / state.total) * 100;
    }
  },
  mutations: {
    [SET_TIME](state, time) {
      state.total = time;
      state.countDown = time;
    },
    [TOGGLE_IS_PLAYING](state) {
      state.isPlaying = !state.isPlaying;
    },
    [TOGGLE_IS_WORKING](state) {
      state.isWorking = !state.isWorking;
    },
    [TOGGLE_IS_DEBUG](state) {
      state.isDebug = !state.isDebug;
      if (state.isDebug) {
        state.work = 5;
        state.break = 5;
        state.total = 5;
        state.countDown = 5;
      } else {
        state.work = 25 * 60;
        state.break = 5 * 60;
        state.total = 25 * 60;
        state.countDown = 25 * 60;
      }
      state.isWorking = true;
      state.isPlaying = false;
      stopClock();
    },
    [TICK_TOCK](state) {
      if (state.countDown !== 0) {
        state.countDown = state.countDown - 1;
      }
    }
  },
  actions: {
    [PLAY_OR_STOP]({ dispatch, commit, state }) {
      if (state.isPlaying) {
        dispatch(STOP_COUNT_DOWN);
      } else {
        dispatch(START_COUNT_DOWN);
      }
      commit(TOGGLE_IS_PLAYING);
    },
    [START_COUNT_DOWN]({ commit, dispatch, state }) {
      if (state.countDown) {
        startClock(commit, dispatch, state);
      }
    },
    [STOP_COUNT_DOWN]() {
      stopClock();
    },
    [FINISH_COUNT_DOWN]({ commit, state }) {
      commit(SET_TIME, state.isWorking ? state.break : state.work);
      commit(TOGGLE_IS_PLAYING);
      commit(TOGGLE_IS_WORKING);
    }
  }
};

export default main;
