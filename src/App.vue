<template>
  <div id="app">
    <router-view />
    <copyright />
  </div>
</template>

<script>
import Copyright from '@/components/Copyright';

export default {
  name: 'App',
  components: { Copyright }
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
