<template>
  <div class="panel-container">
    <TodoInput />
    <div class="panel-container-title">TO-DO</div>
    <TodoList is-white />
    <div class="panel-container-title">DONE</div>
    <TodoList is-white />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
export default {
  name: 'TodoPanel',
  components: { TodoList, TodoInput }
};
</script>
