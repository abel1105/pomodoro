<template>
  <div class="navBar" :class="{ 'navBar--work': isWorking }">
    <div class="navBar-icon">
      <router-link
        :to="{ name: 'home' }"
        active-class="navBar-icon--active"
        v-if="isMobile"
      >
        <md-icon>home</md-icon>
      </router-link>
      <router-link
        :to="{ name: 'todo' }"
        active-class="navBar-icon--active"
        v-if="!isPanel || isMobile"
      >
        <md-icon>list</md-icon>
      </router-link>
      <router-link
        :to="{ name: 'report' }"
        active-class="navBar-icon--active"
        v-if="!isPanel || isMobile"
      >
        <md-icon>insert_chart</md-icon>
      </router-link>
      <router-link
        :to="{ name: 'alarm' }"
        active-class="navBar-icon--active"
        v-if="!isPanel || isMobile"
      >
        <md-icon>library_music</md-icon>
      </router-link>
      <router-link
        :to="{ name: 'home' }"
        active-class="navBar-icon--active"
        v-if="isPanel && !isMobile"
      >
        <md-icon>clear</md-icon>
      </router-link>
      <div
        class="navBar-icon-debug"
        :class="{ 'navBar-icon--active': isDebug }"
        @click="toggleDebug"
        v-if="!isPanel || isMobile"
      >
        <md-icon>bug_report</md-icon>
      </div>
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
import { TOGGLE_IS_DEBUG } from '@/stores/constants/mutation-types';
export default {
  name: 'NavBar',
  computed: {
    isPanel() {
      return _.some(this.$route.matched, { name: 'panel' });
    },
    isDebug() {
      return this.$store.state.main.isDebug;
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    },
    isMobile() {
      return this.$store.getters.isMobileScreen;
    }
  },
  methods: {
    toggleDebug() {
      this.$store.commit(TOGGLE_IS_DEBUG);
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

  @media (max-width: 1024px) {
    right: 30px;
  }

  @media (max-width: 992px) {
    position: absolute;
  }

  &-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      margin: 0 0 48px;
    }

    .md-icon {
      width: 36px;
      min-width: 36px;
      height: 36px;
      font-size: 36px !important;
    }

    &--active {
      color: $blue;
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

  &--work {
    .navBar-icon {
      &--active {
        color: $red;
      }
    }
  }
}
</style>
