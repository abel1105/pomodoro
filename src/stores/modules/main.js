import {
  TOGGLE_IS_PLAYING,
  TOGGLE_IS_WORKING
} from '@/stores/constants/mutation-types';

const main = {
  state: {
    countDown: 25 * 60, // minutes
    isWorking: true, // countdown minutes 25 or 5
    isPlaying: false // time start or stop
  },
  mutations: {
    [TOGGLE_IS_PLAYING](state) {
      state.isPlaying = !state.isPlaying;
    },
    [TOGGLE_IS_WORKING](state) {
      state.isWorking = !state.isWorking;
    }
  }
};

export default main;
