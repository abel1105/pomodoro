<template>
  <h1
    class="timer"
    :class="{ 'timer--work': isWorking, 'timer--sm': size === 'sm' }"
  >
    {{ minutes }}:{{ seconds }}
  </h1>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'Timer',
  props: {
    size: {
      type: String,
      default: 'lg'
    }
  },
  computed: {
    minutes() {
      return _.padStart(Math.floor(this.countDown / 60), 2, '0');
    },
    seconds() {
      return _.padStart(this.countDown % 60, 2, '0');
    },
    countDown() {
      return this.$store.state.main.countDown;
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  }
};
</script>

<style lang="scss" scoped>
.timer {
  font-size: 176px;
  margin: 0;
  color: $blue;

  &--work {
    color: $red;
  }

  &--sm {
    font-size: 64px;
  }
}
</style>
