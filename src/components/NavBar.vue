<template>
  <div class="navBar">
    <div class="navBar-icon">
      <router-link :to="{ name: 'todo' }" v-if="!isPanel">
        <md-icon>list</md-icon>
      </router-link>
      <router-link :to="{ name: 'report' }" v-if="!isPanel">
        <md-icon>insert_chart</md-icon>
      </router-link>
      <router-link :to="{ name: 'alarm' }" v-if="!isPanel">
        <md-icon>library_music</md-icon>
      </router-link>
      <router-link :to="{ name: 'home' }" v-if="isPanel">
        <md-icon>clear</md-icon>
      </router-link>
    </div>
    <aside>
      <router-link :to="{ name: 'home' }">
        <h5>POMODORO</h5>
      </router-link>
    </aside>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'NavBar',
  computed: {
    isPanel() {
      return _.some(this.$route.matched, { name: 'panel' });
    }
  }
};
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  right: 80px;
  width: 36px;
  height: 100vh;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 0;

  &-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      margin: 0 0 48px;

      .md-icon {
        width: 36px;
        min-width: 36px;
        height: 36px;
        font-size: 36px !important;
      }
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
</style>
