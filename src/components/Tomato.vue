<template>
  <div class="tomato">
    <svg
      v-for="(num, index) in range"
      :key="index"
      class="tomato-svg"
      :class="{
        'tomato-svg--full': num === 100,
        'tomato-svg--work': isWorking && !isDone
      }"
      :viewBox="`${-diameter} ${-diameter} ${diameter * 2} ${diameter * 2}`"
      :style="{ width: diameter, height: diameter }"
    >
      <circle v-if="num === 100" :r="diameter" />
      <path v-else :d="path(num)"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Tomato',
  props: {
    value: {
      type: Number,
      default: 100
    },
    diameter: {
      type: Number,
      default: 12
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    range() {
      const arr = [];
      let remain = this.value;
      for (let i = 0; remain > 100; i++) {
        arr[i] = 100;
        remain -= 100;
      }
      arr.push(remain);
      return arr;
    },
    current() {
      return this.value % 100;
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  },
  methods: {
    path(num) {
      const angle = num * 3.6; // 1% ~ 3.6deg
      const coords = [];

      coords[0] = this.diameter * Math.cos((Math.PI * angle) / 180);
      coords[1] = this.diameter * Math.sin((Math.PI * angle) / 180);

      return (
        'M0,0 L' +
        this.diameter +
        ',0 A' +
        this.diameter +
        ',' +
        this.diameter +
        ' 0 1,1 ' +
        coords[0] +
        ',' +
        coords[1] +
        ' Z'
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.tomato {
  display: flex;

  &-svg {
    overflow: hidden;
    transform: scale(1) rotate(-90deg);
    transform-origin: center;
    transition: 0.4s;
    border-radius: 50%;
    margin-right: 8px;

    path {
      fill: currentColor;
    }

    circle {
      fill: currentColor;
    }

    /*&--full {*/
    /*  border: none !important;*/
    /*}*/

    &--work {
      border: 1px solid $red;

      path {
        fill: $red;
      }
    }

    &--full.tomato-svg--work {
      border: none;
    }
  }
}
</style>
