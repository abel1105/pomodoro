<template>
  <div class="home">
    <div class="home-left"></div>
    <div class="home-right">
      <div class="home-right-nav">
        <div class="home-right-nav-icon">
          <md-icon>list</md-icon>
          <md-icon>insert_chart</md-icon>
          <md-icon>library_music</md-icon>
        </div>
        <aside>
          <h5>POMODORO</h5>
        </aside>
      </div>
      <div class="home-right-clock">
        <Clock :value="60" :diameter="540" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Clock from '@/components/Clock';
export default {
  name: 'home',
  components: {
    Clock
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  &-left {
    width: calc(100% - 450px);
    height: 100vh;
    background: $pink;
  }
  &-right {
    position: relative;
    width: 450px;
    height: 100vh;
    background: $dark_blue;

    &-nav {
      position: absolute;
      right: 85px;
      width: 36px;
      height: 100vh;
      color: $white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 45px 0;

      &-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .md-icon {
          width: 36px;
          min-width: 36px;
          height: 36px;
          font-size: 36px !important;
          margin: 0 0 48px;
        }
      }
      aside {
        font-family: Futura, sans-serif;
        position: relative;
        height: 100%;

        h5 {
          position: absolute;
          bottom: 0;
          right: 28px;
          font-size: 24px;
          transform-origin: right bottom;
          transform: rotate(90deg);
          margin: 0;
        }
      }
    }

    &-clock {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
