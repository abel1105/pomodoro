<template>
  <ul
    class="todoList"
    :class="{ 'todoList--white': isWhite, 'todoList--work': isWorking }"
  >
    <li
      class="todoList-item"
      :class="{ 'todoList-item-active': item.id === currentId }"
      v-for="item in todoList"
      :key="item.id"
    >
      <div class="todoList-item-radio" @click="toggleDone(item.id)">
        <md-icon>
          {{ item.isDone ? 'check_circle_outline' : 'radio_button_unchecked' }}
        </md-icon>
      </div>
      <h3
        class="todoList-item-title"
        :class="{ 'todoList-item-title--done': item.isDone }"
      >
        {{ item.title }}
      </h3>
      <div
        v-if="!item.isDone && item.id !== currentId"
        @click="onActive(item.id)"
      >
        <md-icon class="todoList-item-play">
          play_circle_outline
        </md-icon>
      </div>
      <Tomato v-if="item.isDone" :value="item.tomato" :is-done="item.isDone" />
    </li>
  </ul>
</template>

<script>
import Tomato from '@/components/Tomato';
import {
  ACTIVE_TODO,
  TODDLE_TODO_DONE
} from '@/stores/constants/mutation-types';
export default {
  name: 'TodoList',
  components: { Tomato },
  props: {
    todoList: {
      type: Array,
      default: () => []
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentId() {
      return this.$store.state.todo.currentId;
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  },
  methods: {
    toggleDone(id) {
      return this.$store.commit(TODDLE_TODO_DONE, id);
    },
    onActive(id) {
      this.$router.push({ name: 'home' });
      return this.$store.commit(ACTIVE_TODO, id);
    }
  }
};
</script>

<style lang="scss" scoped>
.todoList {
  color: $dark_blue;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;

  &-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $dark_blue_20;
    padding-bottom: 10px;
    margin-bottom: 9px;

    &-radio {
      margin-right: 4px;
    }

    &-title {
      width: calc(100% - 24px - 4px - 24px - 4px);
      font-size: 16px;
      margin: 0;
      font-weight: bold;

      &--done {
        text-decoration: line-through;
      }
    }

    &-play {
      margin: 0 0 0 4px;
    }
  }

  &--white {
    color: $white;

    .todoList {
      &-item {
        border-bottom: 1px solid $white_20;

        &-active {
          .todoList-item-title {
            color: $blue;
          }

          .todoList-item-radio {
            color: $blue;
          }
        }
      }
    }

    &.todoList--work {
      .todoList-item-active {
        .todoList-item-title {
          color: $red;
        }

        .todoList-item-radio {
          color: $red;
        }
      }
    }
  }
}
</style>
