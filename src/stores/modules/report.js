import _ from 'lodash';
import { ADD_TOMATO_ON_REPORT } from '@/stores/constants/actions';
import {
  ADD_TOMATO_ON_HISTORY,
  ADD_TOMATO_ON_TODAY,
  ADD_TOMATO_ON_WEEK
} from '@/stores/constants/mutation-types';
import { mergeHistoryWithLocalStorage } from '@/helper/report';
import { LOCAL_STORAGE_KEY, setLocalStorage } from '@/helper/localStorage';

const history = mergeHistoryWithLocalStorage();

const report = {
  state: {
    today: history[history.length - 1].y,
    week: _.sumBy(history, 'y'),
    history
  },
  mutations: {
    [ADD_TOMATO_ON_TODAY](state) {
      state.today = state.today + 1;
    },
    [ADD_TOMATO_ON_WEEK](state) {
      state.week = state.week + 1;
    },
    [ADD_TOMATO_ON_HISTORY](state) {
      state.history = state.history.map((item, index) => {
        if (index === state.history.length - 1) {
          return {
            ...item,
            y: item.y + 1
          };
        }
        return item;
      });
      setLocalStorage(LOCAL_STORAGE_KEY.HISTORY_REPORT, state.history);
    }
  },
  actions: {
    [ADD_TOMATO_ON_REPORT]({ commit }) {
      commit(ADD_TOMATO_ON_TODAY);
      commit(ADD_TOMATO_ON_WEEK);
      commit(ADD_TOMATO_ON_HISTORY);
    }
  }
};

export default report;
