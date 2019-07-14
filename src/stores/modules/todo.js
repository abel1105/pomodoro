import _ from 'lodash';
import {
  ACTIVE_TODO,
  ADD_NEW_TODO,
  ADD_TOMATO,
  TODDLE_TODO_DONE
} from '@/stores/constants/mutation-types';
import { generateId } from '@/helper/todo';
import { ADD_TOMATO_ON_CURRENT } from '@/stores/constants/actions';

const isDone = state => {
  return state.todoList.filter(item => item.isDone);
};

const isUndone = state => {
  return state.todoList.filter(item => !item.isDone);
};

const todo = {
  state: {
    currentId: 'zsdfgt',
    todoList: [
      {
        id: 'zsdfgt',
        title: 'The F2E week 1',
        isDone: false,
        tomato: 3
      }
    ]
  },
  getters: {
    threeUndoList(state, getters) {
      return getters.undoneList
        .filter(item => item.id !== state.currentId)
        .filter((_, index) => index < 3);
    },
    doneList(state) {
      return isDone(state);
    },
    undoneList(state) {
      return isUndone(state);
    },
    current(state) {
      return _.find(state.todoList, item => item.id === state.currentId);
    }
  },
  mutations: {
    [ADD_NEW_TODO](state, title) {
      state.todoList.unshift({
        id: generateId(),
        isDone: false,
        tomato: 0,
        title
      });
    },
    [TODDLE_TODO_DONE](state, id) {
      state.todoList = state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone
          };
        }
        return item;
      });
      if (id === state.currentId || !state.currentId) {
        state.currentId = isUndone(state)[0] ? isUndone(state)[0].id : null;
      }
    },
    [ACTIVE_TODO](state, id) {
      state.currentId = id;
    },
    [ADD_TOMATO](state) {
      state.todoList = state.todoList.map(item => {
        if (item.id === state.currentId) {
          return {
            ...item,
            tomato: item.tomato + 1
          };
        }
        return item;
      });
    }
  },
  actions: {
    [ADD_TOMATO_ON_CURRENT]({ commit }) {
      commit(ADD_TOMATO);
    }
  }
};

export default todo;
