<template>
  <div class="todoInput" :class="{ 'todoInput--work': isWorking }">
    <input
      v-model="title"
      class="todoInput-input"
      type="text"
      placeholder="ADD A NEW MISSION..."
      v-on:keyup.enter="submit"
    />
    <div @click="submit">
      <md-icon class="todoInput-add">add</md-icon>
    </div>
  </div>
</template>

<script>
import { ADD_NEW_TODO } from '@/stores/constants/mutation-types';

export default {
  name: 'TodoInput',
  data() {
    return {
      title: ''
    };
  },
  computed: {
    isWorking() {
      return this.$store.state.main.isWorking;
    },
    isPlaying() {
      return this.$store.state.main.isPlaying;
    }
  },
  methods: {
    submit() {
      const trimTitle = this.title.trim();
      if (trimTitle) {
        this.$store.commit(ADD_NEW_TODO, trimTitle);
        this.title = '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.todoInput {
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: $white;

  &-input {
    color: $blue;
    font-size: 16px;
    border: none;
    font-weight: bold;
    background: none;
    margin-left: 16px;
    width: calc(100% - 16px - 16px - 24px - 16px);

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $blue;
      font-style: italic;
    }
  }

  &-add {
    cursor: pointer;
    margin: 16px;
    color: $blue;
  }

  &--work {
    .todoInput {
      &-input {
        color: $red;

        &::placeholder {
          color: $red;
        }
      }

      &-add {
        color: $red;
      }
    }
  }
}
</style>
