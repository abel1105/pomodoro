<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import _ from 'lodash';
import { SET_SCREEN_SIZE } from '@/stores/constants/mutation-types';

export default {
  name: 'App',
  mounted() {
    window.addEventListener('resize', _.debounce(this.setSize, 200));
  },
  methods: {
    setSize() {
      this.$store.commit(SET_SCREEN_SIZE, {
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;

  * {
    line-height: 1;
  }
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark_blue;
}
a {
  color: inherit;
  text-decoration: none !important;
}
</style>
