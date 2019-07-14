<template>
  <div class="reportNumber" :class="{ 'reportNumber--work': isWorking }">
    <h5>{{ name }}</h5>
    <span class="reportNumber-number">{{ number }}</span>
    <span class="reportNumber-tomato">/TOMATO</span>
  </div>
</template>

<script>
export default {
  name: 'ReportNumber',
  props: {
    name: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  }
};
</script>

<style lang="scss" scoped>
.reportNumber {
  color: $blue;
  font-weight: bold;

  h5 {
    margin: 0;
    color: $white;
    font-size: 16px;
  }

  &-number {
    font-size: 64px;
  }

  &-tomato {
    color: $white_20;
    font-size: 16px;
  }

  &--work {
    color: $red;
  }
}
</style>
