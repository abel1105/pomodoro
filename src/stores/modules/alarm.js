import {
  SET_BREAK_ALARM,
  SET_WORK_ALARM
} from '@/stores/constants/mutation-types';
import { PLAY_BREAK_ALARM, PLAY_WOKR_ALARM } from '@/stores/constants/actions';
import { playAudio } from '@/helper/audio';
import {
  getLocalStorage,
  LOCAL_STORAGE_KEY,
  setLocalStorage
} from '@/helper/localStorage';

const alarm = {
  state: {
    work: getLocalStorage(LOCAL_STORAGE_KEY.WORK_AUDIO) || 'default',
    break: getLocalStorage(LOCAL_STORAGE_KEY.BREAK_AUDIO) || 'default'
  },
  mutations: {
    [SET_WORK_ALARM](state, alarm) {
      state.work = alarm;
      setLocalStorage(LOCAL_STORAGE_KEY.WORK_AUDIO, alarm);
    },
    [SET_BREAK_ALARM](state, alarm) {
      state.break = alarm;
      setLocalStorage(LOCAL_STORAGE_KEY.BREAK_AUDIO, alarm);
    }
  },
  actions: {
    [PLAY_WOKR_ALARM]({ state }) {
      if (state.work !== 'none') {
        playAudio(state.work);
      }
    },
    [PLAY_BREAK_ALARM]({ state }) {
      if (state.break !== 'none') {
        playAudio(state.break);
      }
    }
  }
};

export default alarm;
