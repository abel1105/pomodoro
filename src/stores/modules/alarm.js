import {
  SET_BREAK_ALARM,
  SET_WORK_ALARM
} from '@/stores/constants/mutation-types';
import { PLAY_BREAK_ALARM, PLAY_WOKR_ALARM } from '@/stores/constants/actions';
import { playAudio } from '@/helper/audio';

const alarm = {
  state: {
    work: 'default',
    break: 'default'
  },
  mutations: {
    [SET_WORK_ALARM](state, alarm) {
      state.work = alarm;
    },
    [SET_BREAK_ALARM](state, alarm) {
      state.break = alarm;
    }
  },
  actions: {
    [PLAY_WOKR_ALARM]({ state }) {
      playAudio(state.work);
    },
    [PLAY_BREAK_ALARM]({ state }) {
      playAudio(state.break);
    }
  }
};

export default alarm;
