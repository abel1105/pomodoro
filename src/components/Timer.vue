<template>
  <div
    class="timer"
    :class="{
      'timer--work': isWorking,
      'timer--sm': size === 'sm'
    }"
  >
    <h1>{{ minutes }}:{{ seconds }}</h1>
    <div v-if="isMobile" class="timer-clock">
      <Clock size="md" :value="percentage" :diameter="100" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Clock from '@/components/Clock';

export default {
  name: 'Timer',
  components: { Clock },
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
    percentage() {
      return this.$store.getters.undonePercentage;
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    },
    isMobile() {
      return this.$store.getters.isMobileScreen;
    }
  }
};
</script>

<style lang="scss" scoped>
.timer {
  color: $blue;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
    height: 120px;
  }

  &-clock {
    transform: translateX(0);
  }

  h1 {
    font-size: 176px;
    margin: 0;

    @media (max-width: 992px) {
      font-size: 80px;
    }
  }

  &--work {
    color: $red;
  }

  &--sm {
    h1 {
      font-size: 64px;
    }
  }
}
</style>
