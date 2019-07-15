<template>
  <div
    class="circle"
    :class="{
      'circle--work': isWorking,
      'circle--play': isPlaying,
      'circle--md': size === 'md',
      'circle--sm': size === 'sm'
    }"
    @click="onClick"
  >
    <div class="circle-bg" ref="bg">
      <md-icon class="md-size-4x">
        {{ isPlaying ? 'pause_circle_filled' : 'play_circle_filled' }}
      </md-icon>
    </div>
    <svg
      class="circle-svg"
      preserveAspectRatio="xMidYMid meet"
      :viewBox="`0 0 ${circleDiameter} ${circleDiameter}`"
      ref="svg"
    >
      <circle
        class="circle-svg-circle"
        cx="50%"
        cy="50%"
        :r="circleRadius"
        ref="circle"
      ></circle>
    </svg>
  </div>
</template>

<script>
import { PLAY_OR_STOP } from '@/stores/constants/actions';

export default {
  name: 'clock',
  props: {
    value: {
      type: Number,
      default: 0
    },
    diameter: {
      type: Number,
      default: 60
    },
    stroke: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      default: 'lg'
    }
  },
  computed: {
    circleDiameter() {
      return this.diameter - 6;
    },
    circleRadius() {
      return (this.circleDiameter - this.stroke) / 2;
    },
    circleStrokeWidth() {
      return parseInt(this.stroke) + 1 + 'px';
    },
    circleCircumference() {
      return 2 * Math.PI * this.circleRadius;
    },
    circleStrokeDashArray() {
      return this.circleCircumference + 'px';
    },
    circleStrokeDashOffset() {
      return (this.circleCircumference * (100 - this.value)) / 100 + 'px';
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    },
    isPlaying() {
      return this.$store.state.main.isPlaying;
    }
  },
  watch: {
    value() {
      this.attachCircleStyle();
    },
    diameter() {
      this.attachBgStyle();
      this.attachSvgStyle();
      this.attachCircleStyle();
    },
    stroke() {
      this.attachCircleStyle();
    }
  },
  methods: {
    attachSvgStyle() {
      const svg = this.$refs.svg;
      const size = `${this.circleDiameter}px`;
      svg.style.width = size;
      svg.style.height = size;
    },
    attachCircleStyle() {
      const circle = this.$refs.circle;
      circle.style.strokeDashoffset = this.circleStrokeDashOffset;
      circle.style.strokeDasharray = this.circleStrokeDashArray;
      circle.style.strokeWidth = this.circleStrokeWidth;
      circle.style.setProperty(
        '--md-progress-spinner-start-value',
        0.95 * this.circleCircumference
      );
      circle.style.setProperty(
        '--md-progress-spinner-end-value',
        0.2 * this.circleCircumference
      );
    },
    attachBgStyle() {
      const bg = this.$refs.bg;
      const size = `${this.circleDiameter - this.stroke * 2}px`;
      bg.style.width = size;
      bg.style.height = size;
    },
    onClick() {
      this.$store.dispatch(PLAY_OR_STOP);
    }
  },
  mounted() {
    this.attachBgStyle();
    this.attachSvgStyle();
    this.attachCircleStyle();
  }
};
</script>

<style lang="scss" scoped>
.circle {
  color: $blue;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 3px solid currentColor;

  &-bg {
    position: absolute;
    border-radius: 50%;
    border: 3px solid currentColor;
    display: flex;
    justify-content: center;
    align-items: center;
    background: currentColor;

    .md-icon {
      position: relative;
      color: $white;

      &::after {
        position: absolute;
        content: ' ';
        background: currentColor;
        width: 12px;
        height: 12px;
        bottom: 10px;
        right: -6px;
      }
    }
  }

  &-svg {
    z-index: -1;
    overflow: visible;
    transform: scale(1) rotate(-90deg);
    transform-origin: center;
    transition: 0.4s;
    will-change: opacity, transform;

    &-circle {
      fill: none;
      stroke: currentColor;
      transform-origin: center;
      transition: stroke-dashoffset 0.25s;
      will-change: stroke-dashoffset, stroke-dasharray, stroke-width,
        animation-name, r;
    }
  }

  &--work {
    color: $red;
  }

  &--play {
    .circle {
      &-bg {
        background: $white;

        .md-icon {
          color: currentColor;
        }
      }
    }
  }

  &--sm {
    .circle {
      &-bg {
        border: 3px solid $white;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        background: currentColor;

        .md-icon {
          width: 90px;
          min-width: 90px;
          height: 90px;
          font-size: 90px !important;
          border-radius: 50%;
          border: 8px solid currentColor;
          color: $white;

          &::after {
            content: none;
          }
        }
      }
    }

    &.circle--play {
      .circle {
        &-bg {
          background: $white;
          border: 3px solid currentColor;

          .md-icon {
            color: currentColor;
          }
        }
      }
    }
  }

  &--md {
    .circle-bg {
      .md-icon {
        width: 50px;
        min-width: 50px;
        height: 50px;
        font-size: 50px !important;

        &::after {
          content: none;
        }
      }
    }
  }
}
</style>
