<template>
  <div
    class="panel-container musicPanel"
    :class="{
      'musicPanel--work': isWorking
    }"
  >
    <div class="panel-container-title">WORK</div>
    <div class="musicPanel-grid">
      <md-radio v-model="workRing" value="none">NONE</md-radio>
      <md-radio v-model="workRing" value="default">DEFAULT</md-radio>
      <md-radio v-model="workRing" value="alarm">ALARM</md-radio>
      <md-radio v-model="workRing" value="radiation">RADIATION</md-radio>
      <md-radio v-model="workRing" value="beep">BEEP</md-radio>
      <md-radio v-model="workRing" value="bell">BELL</md-radio>
      <md-radio v-model="workRing" value="bird">BIRD</md-radio>
      <md-radio v-model="workRing" value="bugle">BUGLE</md-radio>
      <md-radio v-model="workRing" value="digital">DIGITAL</md-radio>
      <md-radio v-model="workRing" value="drop">DROP</md-radio>
      <md-radio v-model="workRing" value="horn">HORN</md-radio>
      <md-radio v-model="workRing" value="music">MUSIC</md-radio>
      <md-radio v-model="workRing" value="ring">RING</md-radio>
      <md-radio v-model="workRing" value="warning">WARNING</md-radio>
      <md-radio v-model="workRing" value="whistle">WHISTLE</md-radio>
    </div>
    <div class="panel-container-title">BREAK</div>
    <div class="musicPanel-grid">
      <md-radio v-model="breakRing" value="none">NONE</md-radio>
      <md-radio v-model="breakRing" value="default">DEFAULT</md-radio>
      <md-radio v-model="breakRing" value="alarm">ALARM</md-radio>
      <md-radio v-model="breakRing" value="radiation">RADIATION</md-radio>
      <md-radio v-model="breakRing" value="beep">BEEP</md-radio>
      <md-radio v-model="breakRing" value="bell">BELL</md-radio>
      <md-radio v-model="breakRing" value="bird">BIRD</md-radio>
      <md-radio v-model="breakRing" value="bugle">BUGLE</md-radio>
      <md-radio v-model="breakRing" value="digital">DIGITAL</md-radio>
      <md-radio v-model="breakRing" value="drop">DROP</md-radio>
      <md-radio v-model="breakRing" value="horn">HORN</md-radio>
      <md-radio v-model="breakRing" value="music">MUSIC</md-radio>
      <md-radio v-model="breakRing" value="ring">RING</md-radio>
      <md-radio v-model="breakRing" value="warning">WARNING</md-radio>
      <md-radio v-model="breakRing" value="whistle">WHISTLE</md-radio>
    </div>
  </div>
</template>

<script>
import {
  SET_BREAK_ALARM,
  SET_WORK_ALARM
} from '@/stores/constants/mutation-types';
import { playAudio } from '@/helper/audio';

export default {
  name: 'MusicPanel',
  computed: {
    workRing: {
      get: function() {
        return this.$store.state.alarm.work;
      },
      set: function(alarm) {
        if (alarm !== 'none') playAudio(alarm);
        return this.$store.commit(SET_WORK_ALARM, alarm);
      }
    },
    breakRing: {
      get: function() {
        return this.$store.state.alarm.break;
      },
      set: function(alarm) {
        if (alarm !== 'none') playAudio(alarm);
        return this.$store.commit(SET_BREAK_ALARM, alarm);
      }
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  }
};
</script>

<style lang="scss" scoped>
.musicPanel {
  &-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(5, 36.4px);
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(8, 36.4px);
    }
  }
}
</style>

<style lang="scss">
.musicPanel {
  height: calc(100vh - 200px);
  overflow: auto;

  @media (max-width: 992px) {
    height: calc(100vh - 180px);
  }

  .md-radio {
    color: #fff;

    .md-radio-container {
      border-color: #fff;
    }

    &.md-checked {
      .md-radio-container {
        border-color: $blue;

        &:after {
          background: $blue;
        }
      }
    }
  }

  &--work {
    .md-radio {
      &.md-checked {
        .md-radio-container {
          border-color: $red;

          &:after {
            background: $red;
          }
        }
      }
    }
  }
}
</style>
