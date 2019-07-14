<template>
  <div class="panel-container">
    <TodoInput />
    <div class="panel-container-title">TO-DO</div>
    <TodoList :todo-list="undoneList" is-white />
    <div class="panel-container-title">DONE</div>
    <TodoList :todo-list="doneList" is-white />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
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
  }
};
</script>
