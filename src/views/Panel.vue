<template>
  <div
    class="panel"
    :class="{
      'panel--mobile': isMobile,
      'panel--menu': showMenu && isMobile,
      'panel--work': isWorking
    }"
  >
    <div v-if="isMobile" class="panel-menu-btn" @click="toggleMenu">
      <md-icon class="md-size-2x">{{ showMenu ? 'close' : 'menu' }}</md-icon>
    </div>
    <div class="panel-navBar">
      <NavBar />
    </div>
    <PanelNavBar v-if="!isMobile" />
    <PanelClock v-if="!isMobile" />
    <router-view></router-view>
    <copyright />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import PanelNavBar from '@/components/panels/PanelNavBar';
import PanelClock from '@/components/panels/PanelClock';
import Copyright from '@/components/Copyright';
import { TOGGLE_SHOW_MENU } from '@/stores/constants/mutation-types';
export default {
  name: 'Panel',
  components: { PanelClock, PanelNavBar, NavBar, Copyright },
  computed: {
    showMenu() {
      return this.$store.state.screen.showMenu;
    },
    isMobile() {
      return this.$store.getters.isMobileScreen;
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  },
  methods: {
    toggleMenu() {
      return this.$store.commit(TOGGLE_SHOW_MENU);
    }
  }
};
</script>

<style lang="scss" scoped>
.panel {
  background: $dark_blue;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &-menu-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: $white;
    transition: all 0.5s;
  }

  &--mobile {
    .panel-navBar {
      position: absolute;
      right: -96px;
      width: 96px;
      height: 100vh;
      border-left: 2px solid $blue;
      transition: all 0.5s;
    }

    .panel-container {
      top: 60px;
      transition: all 0.5s;
    }
  }

  &--menu {
    .panel-menu-btn {
      right: 106px;
    }

    .panel-navBar {
      right: 0;
    }

    .panel-container {
      margin-left: -96px;
    }
  }

  &--work {
    .panel-navBar {
      border-color: $red;
    }
  }
}
</style>

<style lang="scss">
.panel-container {
  position: absolute;
  right: 275px;
  width: 445px;
  top: 48px;

  @media (max-width: 1280px) {
    right: 200px;
  }

  @media (max-width: 1024px) {
    right: 120px;
  }

  @media (max-width: 992px) {
    position: relative;
    max-width: calc(100vw - 30px);
    right: unset;
    margin: 0 15px;
  }

  &-title {
    width: 100%;
    background: $white_20;
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 24px;
    font-weight: bold;
    color: $white;
    margin: 48px 0 16px;
  }
}
</style>
