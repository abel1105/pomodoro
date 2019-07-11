<template>
  <div class="panelNavBar" :class="{ 'panelNavBar--work': isWorking }">
    <router-link :to="{ name: 'todo' }" active-class="--active">
      <md-icon>list</md-icon>
      TO-DO LIST
    </router-link>
    <router-link :to="{ name: 'report' }" active-class="--active">
      <md-icon>insert_chart</md-icon>
      ANALYTICS
    </router-link>
    <router-link :to="{ name: 'alarm' }" active-class="--active">
      <md-icon>library_music</md-icon>
      RINGTONES
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PanelNavBar',
  computed: {
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  }
};
</script>

<style lang="scss" scoped>
.panelNavBar {
  color: $white_20;
  position: absolute;
  left: 85px;
  top: 48px;

  a {
    display: block;
    font-size: 36px;
    margin: 0 0 42px;
    font-weight: bold;

    &.--active {
      color: $blue;
    }

    .md-icon {
      transition: none;
      width: 36px;
      min-width: 36px;
      height: 36px;
      font-size: 36px !important;
      font-weight: normal;
      margin-right: 8px;
    }
  }

  &--work {
    a.--active {
      color: $red;
    }
  }
}
</style>
