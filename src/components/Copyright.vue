<template>
  <div class="footer">
    Copyright © {{ year }}
    <a href="https://www.linkedin.com/in/lee-abel/">Abel</a>
    &nbsp;&nbsp;|&nbsp;&nbsp;Design:
    <a href="https://www.behance.net/juniwu">Junior</a>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 10px;
  right: 85px;
  color: #fff;
}
</style>
