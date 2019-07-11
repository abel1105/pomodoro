<template>
  <div class="firstTodo">
    <div class="firstTodo-radio" @click="onClick">
      <md-icon v-if="!isDone" class="md-size-2x">
        radio_button_unchecked
      </md-icon>
      <md-icon v-if="isDone" class="md-size-2x">check_circle_outline</md-icon>
    </div>
    <div class="firstTodo-content">
      <h5
        class="firstTodo-content-title"
        :class="{ 'firstTodo-content-title--done': isDone }"
      >
        THE FIRST THING TO DO TODAY
      </h5>
      <div class="firstTodo-content-tomato">
        <Tomato :value="data" />
      </div>
    </div>
  </div>
</template>

<script>
import Tomato from '@/components/Tomato';
export default {
  name: 'FirstTodo',
  components: { Tomato },
  data() {
    return {
      isDone: false,
      data: 437
    };
  },
  methods: {
    onClick() {
      this.isDone = !this.isDone;
    }
  }
};
</script>

<style lang="scss" scoped>
.firstTodo {
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
    }

    &-tomato {
      width: 100%;
      overflow: hidden;
      margin-top: 8px;
    }
  }
}
</style>
