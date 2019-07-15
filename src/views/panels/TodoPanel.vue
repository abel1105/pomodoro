<template>
  <div class="panel-container todoPanel">
    <TodoInput />
    <div class="todoPanel-container">
      <div class="panel-container-title">TO-DO</div>
      <TodoList :todo-list="undoneList" is-white />
      <div class="panel-container-title">DONE</div>
      <TodoList :todo-list="doneList" is-white />
      <span v-if="doneList.length" @click="clear">CLEAR</span>
    </div>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { CLEAN_DONE_TODO } from '@/stores/constants/mutation-types';
export default {
  name: 'TodoPanel',
  components: { TodoList, TodoInput },
  computed: {
    undoneList() {
      return this.$store.getters.undoneList;
    },
    doneList() {
      return this.$store.getters.doneList;
    }
  },
  methods: {
    clear() {
      this.$store.commit(CLEAN_DONE_TODO);
    }
  }
};
</script>
<style lang="scss" scoped>
.todoPanel {
  &-container {
    height: calc(100vh - 300px);
    overflow: auto;
    margin-top: 48px;
    padding-bottom: 100px;

    @media (max-width: 992px) {
      height: calc(100vh - 200px);
    }

    .panel-container-title:first-child {
      margin-top: 0;
    }

    span {
      cursor: pointer;
      float: right;
      font-weight: bold;
      color: $white;
    }
  }
}
</style>
