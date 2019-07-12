<template>
  <div class="panelClock" :class="{ 'panelClock--work': isWorking }">
    <div class="panelClock-clock">
      <Clock size="sm" :value="percentage" :diameter="110" :stroke="5" />
    </div>
    <router-link :to="{ name: 'home' }">
      <div class="panelClock-content">
        <Timer size="sm" />
        <h5>THE FIRST THING TO DO TODAY</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
import Clock from '@/components/Clock';
import Timer from '@/components/Timer';
export default {
  name: 'PanelClock',
  components: { Clock, Timer },
  computed: {
    isWorking() {
      return this.$store.state.main.isWorking;
    },
    countDown() {
      return this.$store.state.main.countDown;
    },
    percentage() {
      return (this.countDown / this.$store.state.main.total) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
.panelClock {
  position: absolute;
  left: 85px;
  bottom: -175px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: $light_blue;
  display: flex;
  justify-content: center;

  &-clock {
    width: 122px;
    height: 122px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $dark_blue;
    border-radius: 50%;
    border: 6px solid $dark_blue;
  }

  &-content {
    height: 175px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    h5 {
      color: $dark_blue;
      font-size: 16px;
      margin: 0 0 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 250px;
    }
  }

  &--work {
    background: $pink;
  }
}
</style>
