<template>
  <div class="panel">
    <NavBar />
    <PanelNavBar />
    <PanelClock />
    <router-view></router-view>
    <copyright />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import PanelNavBar from '@/components/panels/PanelNavBar';
import PanelClock from '@/components/panels/PanelClock';
import Copyright from '@/components/Copyright';
export default {
  name: 'Panel',
  components: { PanelClock, PanelNavBar, NavBar, Copyright }
};
</script>
<style lang="scss" scoped>
.panel {
  background: $dark_blue;
  width: 100vw;
  height: 100vh;
}
</style>

<style lang="scss">
.panel-container {
  position: absolute;
  right: 275px;
  width: 445px;
  top: 48px;

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
