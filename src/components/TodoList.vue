<template>
  <ul class="todoList" :class="{ 'todoList--white': isWhite }">
    <li class="todoList-item" v-for="(item, index) in todos" :key="index">
      <div class="todoList-item-radio" @click="onClick">
        <md-icon v-if="!item.isDone">
          radio_button_unchecked
        </md-icon>
        <md-icon v-if="item.isDone">check_circle_outline</md-icon>
      </div>
      <h3
        class="todoList-item-title"
        :class="{ 'todoList-item-title--done': item.isDone }"
      >
        {{ item.title }}
      </h3>
      <md-icon class="todoList-item-play" v-if="!item.isDone">
        play_circle_outline
      </md-icon>
      <Tomato v-else :value="item.tomato" :is-done="item.isDone" />
    </li>
  </ul>
</template>

<script>
import Tomato from '@/components/Tomato';
export default {
  name: 'TodoList',
  components: { Tomato },
  props: {
    todos: {
      type: Array,
      default: () => [
        {
          title: 'The second',
          isDone: false,
          tomato: 300
        },
        {
          title: 'The second',
          isDone: true,
          tomato: 340
        },
        {
          title: 'The second',
          isDone: false,
          tomato: 300
        }
      ]
    },
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {}
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
      }
    }
  }
}
</style>
