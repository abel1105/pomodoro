import {
  SET_BREAK_ALARM,
  SET_WORK_ALARM
} from '@/stores/constants/mutation-types';

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
  }
};

export default alarm;
