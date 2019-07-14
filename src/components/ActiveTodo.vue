<template>
  <div class="activeTodo">
    <div v-if="todo" class="activeTodo-radio" @click="toggleDone">
      <md-icon class="md-size-2x">
        {{ todo.isDone ? 'check_circle_outline' : 'radio_button_unchecked' }}
      </md-icon>
    </div>
    <div v-if="todo" class="activeTodo-content">
      <h5
        class="activeTodo-content-title"
        :class="{ 'activeTodo-content-title--done': todo.isDone }"
      >
        {{ todo.title }}
      </h5>
      <div class="activeTodo-content-tomato">
        <Tomato :value="todo.tomato" />
      </div>
    </div>
    <div v-if="!todo">
      <h5 class="activeTodo-content-title activeTodo-content-title-placeholder">
        Please add your mission
      </h5>
    </div>
  </div>
</template>

<script>
import Tomato from '@/components/Tomato';
import { TODDLE_TODO_DONE } from '@/stores/constants/mutation-types';

export default {
  name: 'ActiveTodo',
  components: { Tomato },
  data() {
    return {
      isDone: false,
      data: 437
    };
  },
  methods: {
    toggleDone() {
      return this.$store.commit(TODDLE_TODO_DONE, this.todo.id);
    }
  },
  computed: {
    todo() {
      return this.$store.getters.current;
    }
  }
};
</script>

<style lang="scss" scoped>
.activeTodo {
  display: flex;

  &-content {
    width: calc(100% - 48px - 16px);
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title {
      margin: 0;
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;

      &--done {
        text-decoration: line-through;
      }

      &-placeholder {
        opacity: 0.5;
      }
    }

    &-tomato {
      width: 100%;
      overflow: hidden;
      margin-top: 8px;
    }
  }
}
</style>
